import React from 'react';
import Title from "./Title";
import { SiNextdotjs, SiReactquery, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from "@/components/ui/dahoover";

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
        <div className="py-10 pt-30 p-5 sm:p-0">
            <Title text="Projects" className="flex flex-col items-center justify-center rotate-6"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index)=>{
                    return <Link href={project.Link} key={index}>
                        <div
                            className={cn(
                                "p-5 rounded-md", 
                                project.background
                            )}
                        >
                            <DirectionAwareHover 
                                imageUrl={project.cover}
                                className="w-full space-y-5 cursor-pointer"
                            >
                                <h1>{project.title}</h1>
                                
                            </DirectionAwareHover>
                        </div>
                    </Link>;
                })}
            </div>
        </div>
    );
}