"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "@/components/ui/Background-Gradient";
import Image from "next/image";
import Title from "./Title";

export default function HeroSection() {
    return <div className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between animate-moveup">
              <Spotlight
                className="-top-40 left-0 md:-left-24 md:-top-36"
                fill="white"
              />
        <div className="space-y-10 text-center lg:text-left flex-col flex">
            <h1 className="text-4xl lg:text-7xl font-bold">
                Hi there, I'm 
                <br/> <span className="underline underline-offset-8 decoration-red-400">{"Kensho."}</span>
            </h1>
            <p className="md:w-96 text-lg text-gray-300">
                {
                    "I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications, video games, and low-level programs. Currently learning Rust and OS Development."
                }
            </p>
            <div className="flex justify-start">
                <Link href="http://ketchupcentral.com">
                    <button className="transform hover:translate-y-0.5 transition duration-400 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#fca5a5_50%,#ef4444_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Games I Made In Middle School ⭐
                        </span>
                    </button>
                </Link>
            </div>
            <Link href={"mailto:kenshonishio7@gmail.com"} className="inline-block group justify-center items-center">
                <Title text="Contact 📧"/>
            </Link>
        </div>
        <div className="flex gap-4">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`/KetchupKenshoNormal.JPG`}
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
