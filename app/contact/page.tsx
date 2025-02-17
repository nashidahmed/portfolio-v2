"use client";

import { motion } from "motion/react";
import { bigShoulders } from "../page";
import ArrowUpIcon from "../components/icons/ArrowUpIcon";
import Link from "next/link";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";

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
    <div className="flex h-screen w-full flex-col gap-4 bg-background p-14">
      <header className="flex flex-col gap-6">
        <section
          className={`${bigShoulders.className} flex gap-4 text-9xl font-extrabold uppercase`}
        >
          <Link href={"/"}>
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
          </Link>
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
      <section className="flex flex-1 flex-col gap-4">
        <Input label="Name" id="name" />
        <Input label="Email address" id="email" />
        <div className="flex-1">
          <Textarea label="Write a message" id="message" />
        </div>
        <div className="text-left">
          <Button>Send Message</Button>
        </div>
      </section>
    </div>
  );
}
