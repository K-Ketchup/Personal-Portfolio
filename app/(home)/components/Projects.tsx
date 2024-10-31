import React from 'react';
import Title from "./Title";
import { SiNextdotjs, SiReactquery, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { cn } from '@/lib/utils';
import { BackgroundGradient } from "@/components/ui/Background-Gradient";

export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-indigo-500",
        },
        {
            title: "Dook App",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-indigo-500",
        },
    ];

    return (
        <div className="py-10 pt-5 p-5 sm:p-0 gap-20">
            <Title text="Projects" className="flex flex-col items-center justify-center rotate-6"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index)=>{
                    return <Link href={project.Link} key={index}>
                        <div>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                <Image
                                    src={project.cover}
                                    alt="ProjectImage"
                                    height="800"
                                    width="800"
                                    className="object-contain rounded-2xl"
                                />
                            </BackgroundGradient>

                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{project.title}</h1>
                                <div>
                                    {project.tech.map((Icon, index)=>{
                                        return <Icon className="w-8 h-8" key={index} />;
                                    })}
                                 </div>
                            </div>
                        </div>
                    </Link>;
                })}
            </div>
            <div className="flex justify-center">
                <Link href="https://github.com/K-Ketchup/Personal-Portfolio">
                    <button className="transform hover:translate-y-0.5 transition duration-400 flex inline-flex h-12 w-80 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Github For This Project 😼
                    </button>
                </Link>
            </div>
        </div>
        
    );
}