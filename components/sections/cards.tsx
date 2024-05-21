"use client";

import { useRef } from "react";
import { Container } from "@/components/index";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end start"],
  });
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [0, 1, 1, 1],
  );
  const menOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const womenOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [0, 0, 1, 1],
  );
  const kidsOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55, 1],
    [0, 0, 1, 1],
  );

  return (
    <motion.article
      className="relative h-[250vh] bg-black/90"
      ref={cardsRef}
      style={{ opacity: containerOpacity }}
    >
      <section className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <Container>
          <h2 className="mb-2 text-xl font-bold lg:text-2xl">
            Choose Your Gender
          </h2>
          <p className="mb-6 text-sm opacity-80 lg:text-base">
            Clothes are adapted to current fashion trends for each gender.
          </p>
          <div className="grid h-[460px] w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <motion.div
              className="relative rounded-xl bg-white/5"
              style={{ opacity: menOpacity }}
            >
              <Image
                src="/men.jpg"
                alt="men"
                width={500}
                height={500}
                className="absolute h-full w-full rounded-2xl object-cover object-center"
              />
              <Link href="/products/men">
                <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-black/30 font-bold duration-300 hover:opacity-0 md:text-xl lg:text-3xl">
                  MEN
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="relative rounded-2xl bg-white/5"
              style={{ opacity: womenOpacity }}
            >
              <Image
                src="/women.jpg"
                alt="women"
                width={500}
                height={500}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
              <Link href="/products/women">
                <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-black/50 font-bold duration-300 hover:opacity-0 md:text-xl lg:text-3xl">
                  WOMEN
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="relative rounded-xl bg-white/5"
              style={{ opacity: kidsOpacity }}
            >
              <Image
                src="/kids.jpg"
                alt="kids"
                width={500}
                height={500}
                className="absolute h-full w-full rounded-xl object-cover object-center"
              />
              <Link href="/products/kids">
                <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-black/70 font-bold duration-300 hover:opacity-0 md:text-xl lg:text-3xl">
                  KIDS
                </div>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </motion.article>
  );
};

export default Cards;