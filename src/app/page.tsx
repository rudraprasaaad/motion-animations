import type { CSSProperties } from "react";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24 sm:py-32">
      <header>
        <h1
          className="rise mt-4 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl"
          style={delay(1)}
        >
          Motion <span className="text-muted">&amp;</span> animation
        </h1>
      </header>
    </main>
  );
}
