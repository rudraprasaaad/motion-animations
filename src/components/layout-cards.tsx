"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const MotionLink = motion.create(Link);

const useOutSideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const ScrollFadeContent = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: contentRef });

  const fade = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const mask = useMotionTemplate`linear-gradient(to top, rgba(0,0,0,${fade}), black 80%)`;

  return (
    <motion.div
      ref={contentRef}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      className="h-40 overflow-auto"
    >
      {children}
    </motion.div>
  );
};

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutSideClick(() => setCurrent(null));

  return (
    <div className="py-14 min-h-screen bg-gray-100 relative">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur "
        />
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-130 fixed inset-0 z-20 m-auto w-72 bg-white rounded-2xl border border-neutral-200 p-4  overflow-hidden
		"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            width={600}
            height={600}
            sizes="288px"
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <div className="flex items-start justify-between w-full py-4 gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${current.description}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <MotionLink
                layoutId={`card-cta-${current.title}`}
                href={current.ctaLink}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                <motion.span layoutId={`card-cta-text-${current.title}`}>
                  {current.ctaText}
                </motion.span>
              </MotionLink>
            </div>

            <ScrollFadeContent>{current.content()}</ScrollFadeContent>
          </div>
        </motion.div>
      )}

      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                width={80}
                height={80}
                className="h-20 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${card.description}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              <motion.span layoutId={`card-cta-text-${card.title}`}>
                {card.ctaText}
              </motion.span>
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Mithoon, Arijit Singh",
    title: "Tum Hi Ho",
    src: "/songs/tum-hi-ho.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/search/Tum%20Hi%20Ho%20Arijit%20Singh",
    content: () => {
      return (
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-neutral-500">
          <p>
            A romantic ballad from the 2013 film Aashiqui 2, composed by Mithoon
            and sung by Arijit Singh.
          </p>
          <p>
            The film was directed by Mohit Suri and starred Aditya Roy Kapur and
            Shraddha Kapoor.
          </p>
          <p>
            The song became one of the biggest Hindi film hits of its decade and
            won Arijit Singh a Filmfare Award for Best Male Playback Singer.
          </p>
          <p>
            Its title means &quot;you are the one&quot;, and its soft piano-led
            melody made it a favourite for love stories and playlists alike.
          </p>
        </div>
      );
    },
  },
  {
    description: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    title: "Kun Faya Kun",
    src: "/songs/kun-faya-kun.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/search/Kun%20Faya%20Kun%20Rockstar",
    content: () => {
      return (
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-neutral-500">
          <p>
            A Sufi-inspired qawwali from the 2011 film Rockstar, composed by
            A.R. Rahman with lyrics by Irshad Kamil.
          </p>
          <p>The film was directed by Imtiaz Ali and starred Ranbir Kapoor.</p>
          <p>
            The title is an Arabic phrase meaning &quot;Be, and it is&quot;, and
            the song is picturized at the Nizamuddin Dargah in Delhi.
          </p>
          <p>
            Its slow build, devotional mood and layered vocals made it one of
            the most loved spiritual songs in Hindi cinema.
          </p>
        </div>
      );
    },
  },
  {
    description: "Pritam, Arijit Singh",
    title: "Kesariya",
    src: "/songs/kesariya.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/search/Kesariya%20Brahmastra",
    content: () => {
      return (
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-neutral-500">
          <p>
            A love song from the 2022 film Brahmastra: Part One - Shiva,
            composed by Pritam with lyrics by Amitabh Bhattacharya and sung by
            Arijit Singh.
          </p>
          <p>
            The film was directed by Ayan Mukerji and stars Ranbir Kapoor and
            Alia Bhatt.
          </p>
          <p>
            The word kesariya means saffron-coloured, and in the song it is used
            as a tender way to address a loved one.
          </p>
          <p>
            Its gentle melody and warm vocals made it the standout romantic
            track of the album.
          </p>
        </div>
      );
    },
  },
  {
    description: "Sukhwinder Singh, Sapna Awasthi",
    title: "Chaiyya Chaiyya",
    src: "/songs/chaiyya-chaiyya.jpg",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/search/Chaiyya%20Chaiyya%20Dil%20Se",
    content: () => {
      return (
        <div className="flex flex-col gap-3 text-xs leading-relaxed text-neutral-500">
          <p>
            The energetic opening number of the 1998 film Dil Se.., composed by
            A.R. Rahman with lyrics by Gulzar and picturized on top of a moving
            train.
          </p>
          <p>
            The film was directed by Mani Ratnam and stars Shah Rukh Khan and
            Manisha Koirala.
          </p>
          <p>
            The scene was shot on the Nilgiri Mountain Railway and choreographed
            by Farah Khan, with Malaika Arora dancing alongside Shah Rukh Khan.
          </p>
          <p>
            Its folk-inspired rhythm and Sufi-flavoured lyrics made it one of
            the most iconic Bollywood dance songs ever.
          </p>
        </div>
      );
    },
  },
];
