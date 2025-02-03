"use client";

import { motion } from "framer-motion";
import { bigShoulders } from "../page";
import ArrowUpIcon from "../components/icons/ArrowUpIcon";
import Link from "next/link";
import Input from "../components/Input";

export default function Contact() {
  const socialMedia = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/nashid-shah/" },
    {
      title: "Discord",
      link: "https://discordapp.com/users/810534888842592266",
    },
    { title: "Telegram", link: "https://t.me/Nacho115" },
    { title: "Instagram", link: "https://www.facebook.com/nashid.ahmed.5/" },
    { title: "X", link: "https://x.com/lonewolf_115" },
  ];

  return (
    <div className="flex flex-col gap-4 p-14">
      <header className="flex flex-col gap-6">
        <section
          className={`${bigShoulders.className} flex gap-4 text-9xl font-extrabold uppercase`}
        >
          <motion.div
            className="flex items-center justify-center rounded-full"
            initial={{ color: "#EF5235", height: 32, width: 32 }}
            whileHover={{
              backgroundColor: "#EF5235",
              color: "#FFF0DD",
              height: 49,
              width: 49,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowUpIcon className="cursor-pointer" />
          </motion.div>
          Let&apos;s talk
        </section>
        <section>
          You can contact me on{" "}
          {socialMedia.map(({ title, link }, index) => (
            <span key={index}>
              <Link
                href={link}
                target="_blank"
                className="text-secondaryText underline"
              >
                {title}
              </Link>
              {index < socialMedia.length - 1 && (
                <span className="mx-1">|</span>
              )}
            </span>
          ))}
          .
          <br />
          If not, feel free to shoot me a message down below!
        </section>
      </header>
      <section className="flex flex-col gap-4">
        <Input label="Name" />
        <Input label="Email address" />
      </section>
    </div>
  );
}
