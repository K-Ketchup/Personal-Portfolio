"use client";
import React from "react";
import Title from "./Title";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/dahoover";
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";
import Link from "next/link";

export default function Skills() {
    return (
        <div className="space-y-5">
            <Title text="Experience" className="flex flex-col items-center justify-center -rotate-6"/>
            <div className="space-y-10 text-center lg:text-center flex justify-center">
                <p className="md:w-80 text-lg text-gray-300">
                    {
                        "Rough estimates, given I have been coding on and off."
                    }
                </p>
            </div>
            <div className="h-[20rem] space-x-5 relative flex items-center justify-center">
                <DirectionAwareHover imageUrl={"/csharp.jpg"}>
                    <p className="font-bold text-xl">C#</p>
                    <p className="font-normal text-sm">5 Years -- Unity and Appdev</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/xamllang.png"}>
                    <p className="font-bold text-xl">XAML</p>
                    <p className="font-normal text-sm">2 Years -- Appdev</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/unity.png"}>
                    <p className="font-bold text-xl">Unity</p>
                    <p className="font-normal text-sm">2 Years -- Gamedev</p>
                </DirectionAwareHover>
            </div>
            <div className="h-[10rem] space-x-5 relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={"/python.png"}>
                    <p className="font-bold text-xl">Python</p>
                    <p className="font-normal text-sm">6 Months -- Machine Learning</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/rustlangg.png"}>
                    <p className="font-bold text-xl">Rust</p>
                    <p className="font-normal text-sm">7 Months -- Osdev</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/javalang.png"}>
                    <p className="font-bold text-xl">Java</p>
                    <p className="font-normal text-sm">2 Years -- School</p>
                </DirectionAwareHover>
            </div>
            <div className="h-[20rem] space-x-5 relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={"/tslang.png"}>
                    <p className="font-bold text-xl">Next.js, Tailwind, Typescript, etc.</p>
                    <p className="font-normal text-sm">Several weeks -- This Website!</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/azureservices.png"}>
                    <p className="font-bold text-xl">Azure</p>
                    <p className="font-normal text-sm">6 Months -- Appdev</p>
                </DirectionAwareHover>
                <DirectionAwareHover imageUrl={"/dotnetfw.png"}>
                    <p className="font-bold text-xl">.NET</p>
                    <p className="font-normal text-sm">3 Years -- Appdev</p>
                </DirectionAwareHover>
            </div>
        </div>
    );
}

