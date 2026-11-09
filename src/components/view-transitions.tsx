"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Suspense,
  createContext,
  startTransition,
  use,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ComponentProps,
  type MouseEvent,
} from "react";

type FinishViewTransition = (() => void) | null;
type PendingViewTransition = [
  Promise<void>,
  () => void,
];

const ViewTransitionsContext = createContext<
  ((finish: () => void) => void) | null
>(null);

function useHash() {
  return useSyncExternalStore(subscribeHash, getHashSnapshot, () => "");
}

function getHashSnapshot() {
  return window.location.hash;
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function settleViewTransition(transition: ViewTransition) {
  transition.ready.catch(() => {});
  transition.finished.catch(() => {});
  transition.updateCallbackDone.catch(() => {});
}

function useBrowserNativeTransitions() {
  const pathname = usePathname();
  const currentPathname = useRef(pathname);
  const [currentViewTransition, setCurrentViewTransition] =
    useState<PendingViewTransition | null>(null);
  const hash = useHash();

  useLayoutEffect(() => {
    if (!("startViewTransition" in document)) {
      return;
    }

    const onPopState = () => {
      let pendingViewTransitionResolve: () => void = () => {};
      const pendingViewTransition = new Promise<void>((resolve) => {
        pendingViewTransitionResolve = resolve;
      });
      const pendingStartViewTransition = new Promise<void>((resolve) => {
        const transition = document.startViewTransition(() => {
          resolve();
          return pendingViewTransition;
        });
        settleViewTransition(transition);
      });

      setCurrentViewTransition([
        pendingStartViewTransition,
        pendingViewTransitionResolve,
      ]);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (currentViewTransition && currentPathname.current !== pathname) {
    use(currentViewTransition[0]);
  }

  const transitionRef = useRef(currentViewTransition);
  useLayoutEffect(() => {
    transitionRef.current = currentViewTransition;
  }, [currentViewTransition]);

  useLayoutEffect(() => {
    currentPathname.current = pathname;
    if (!transitionRef.current) {
      return;
    }

    transitionRef.current[1]();
    transitionRef.current = null;
  }, [hash, pathname]);
}

export function ViewTransitions({ children }: { children: React.ReactNode }) {
  const [finishViewTransition, setFinishViewTransition] =
    useState<FinishViewTransition>(null);

  useLayoutEffect(() => {
    if (!finishViewTransition) {
      return;
    }

    finishViewTransition();
    setFinishViewTransition(null);
  }, [finishViewTransition]);

  return (
    <ViewTransitionsContext.Provider value={setFinishViewTransition}>
      <Suspense fallback={null}>
        <BrowserNativeTransitions />
      </Suspense>
      {children}
    </ViewTransitionsContext.Provider>
  );
}

function BrowserNativeTransitions() {
  useBrowserNativeTransitions();
  return null;
}

function useSetFinishViewTransition() {
  const setFinishViewTransition = useContext(ViewTransitionsContext);
  if (!setFinishViewTransition) {
    throw new Error(
      "useSetFinishViewTransition must be used within a ViewTransitions component",
    );
  }
  return setFinishViewTransition;
}

export function useTransitionRouter() {
  const router = useRouter();
  const finishViewTransition = useSetFinishViewTransition();

  const triggerTransition = useCallback(
    (cb: () => void) => {
      if (!("startViewTransition" in document)) {
        cb();
        return;
      }

      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            startTransition(() => {
              cb();
              finishViewTransition(() => resolve);
            });
          }),
      );
      settleViewTransition(transition);
    },
    [finishViewTransition],
  );

  const push = useCallback(
    (href: string, options?: Parameters<typeof router.push>[1]) => {
      triggerTransition(() => router.push(href, options));
    },
    [router, triggerTransition],
  );

  const replace = useCallback(
    (href: string, options?: Parameters<typeof router.replace>[1]) => {
      triggerTransition(() => router.replace(href, options));
    },
    [router, triggerTransition],
  );

  return useMemo(
    () => ({
      ...router,
      push,
      replace,
    }),
    [push, replace, router],
  );
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  const target = event.currentTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.nativeEvent.button === 1
  );
}

export function Link({
  href,
  replace,
  scroll,
  onClick,
  ...props
}: ComponentProps<typeof NextLink>) {
  const router = useTransitionRouter();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);

      if (event.defaultPrevented || isModifiedEvent(event)) {
        return;
      }

      if (!("startViewTransition" in document)) {
        return;
      }

      event.preventDefault();
      const destination = href.toString();
      const navigate = replace ? router.replace : router.push;
      navigate(destination, { scroll: scroll ?? true });
    },
    [href, onClick, replace, router, scroll],
  );

  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      onClick={handleClick}
      {...props}
    />
  );
}
