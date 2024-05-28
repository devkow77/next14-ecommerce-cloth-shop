"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
  { name: "Sizes", href: "/sizes" },
  { name: "News", href: "/news" },
  { name: "Faq", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const menuMotion = {
  visible: {
    left: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    left: 100,
  },
};

const itemMotion = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

const MobileMenu = () => {
  return (
    <motion.section
      className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black/90 md:hidden"
      variants={menuMotion}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-6 font-semibold">
        {links.map(({ name, href }: Link, index: number) => (
          <Link
            href={href}
            key={index}
            className="duration-200 hover:text-red-600"
          >
            <motion.p variants={itemMotion}>{name}</motion.p>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default MobileMenu;
