"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import React from "react"
import { BackgroundGradient } from "@/components/ui/Background-Gradient";
import Image from "next/image";

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
                    "I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications, video games, and low-level programs."
                }
            </p>
            <Link href={"mailto:kenshonishio7@gmail.com"} className="inline-block group">
                <div>
                    <h1 className="text-3xl font-bold group-hover:text-red-400 transition-all">Contact 📧</h1>
                    <div className="w-40 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-40 h-2 bg-red-500 rounded-full translate-x-2"></div>
                </div>
            </Link>
        </div>
        <div className="flex gap-4">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-8 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`/KoreanRoomPic.jpg`}
                    alt="babykensho"
                    height="400"
                    width="400"
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
