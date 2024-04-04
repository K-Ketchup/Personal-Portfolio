"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import React from "react"
import { BackgroundGradient } from "@/components/ui/Background-Gradient";
import Image from "next/image";
import Title from "./Title";

export default function HeroSection() {
    return <div className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between">
              <Spotlight
                className="-top-30 left-90 md:left-900 md:top-12"
                fill="white"
              />
        <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-7xl font-bold">
                Hi there, I'm 
                <br/> <span className="underline underline-offset-8 decoration-red-400">{"Kensho."}</span>
            </h1>
            <p className="md:w-96 text-lg text-gray-300">
                {
                    "I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications, video games, and low-level programs. I heavily dislike web development."
                }
            </p>
            <Link href={"mailto:kenshonishio7@gmail.com"} className="inline-block group">
                <Title text="Contact 📧"/>
            </Link>
        </div>
        <div className="flex gap-4">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`/KetchupKensho.svg`}
                    alt="KetchupKensho"
                    height="800"
                    width="800"
                    className="object-contain rounded-2xl"
                />
            </BackgroundGradient>
            <div className="flex gap-2" style={{flexDirection: "column"}}>
                <div className=" w-20 h-20 rounded-2xl bg-red-500"></div>
                <div className=" w-20 h-20 rounded-2xl bg-red-400"></div>
                <div className=" w-20 h-20 rounded-2xl bg-red-500"></div>
                <div className=" w-20 h-20 rounded-2xl bg-red-400"></div>
            </div>
        </div>
    </div>;
}
