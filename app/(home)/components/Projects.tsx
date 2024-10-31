import React from 'react';
import Title from "./Title";
import { SiNextdotjs, SiReactquery, SiTailwindcss, SiXaml, SiCsharp, SiMicrosoftazure, SiPython, SiTensorflow, SiKeras } from "react-icons/si";
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
            background: "bg-red-500",
            text: "A website to showcase my skills and projects. Made using Next.js, TypeScript, and React. You can also take a look at my middle school website above!",
        },
        {
            title: "Dook",
            tech: [SiXaml, SiCsharp, SiMicrosoftazure],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownemotiondetector.png",
            background: "bg-red-400",
            text: "Utility iOS and Android mobile application made using .NET MAUI. The backend is C#, frontend is XAML, and every user input is logged in an Azure database using SQL.",
        },
        {
            title: "Facial Emotion AI",
            tech: [SiPython, SiTensorflow, SiKeras],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownemotiondetector.png",
            background: "bg-red-400",
            text: "An AI facial emotion detector created with Python and Tensorflow. Uses a convolution neural network to plot facial landmarks, measure euclidian distances between them, and evaluate an emotion.",
        },
        {
            title: "Evacuation Drill AI",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "An AI school evacuation drill simulator that analyzes clog points and crowds during evacuation using neural networks to produce optimal paths for evacuation. Made using Unity and C#.",
        },
        {
            title: "Digital Diary",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "A digital diary made using Unity and C#. All data can be exported through a .txt file.",
        },
        {
            title: "Digital License Register",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-400",
            text: "A digital driver's license catalog made using Unity and C#.",
        },
        {
            title: "Library Database",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-400",
            text: "A text-based Java library database. Can be used to log data of different books/movies/articles and can also account for monthly pay. All data can be exported through a .txt file.",
        },
        {
            title: "Video Games",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "Consists of several different games created solo using Unity and C#. All sprites, animations, level design, and sound design is by me.",
        },
    ];

    return (
        <div className="py-5 pt-5 p-5 sm:p-0 space-y-5">
            <Title text="Projects" className="flex flex-col items-center justify-center rotate-6"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-10">
                {projects.map((project, index)=>{
                    return <Link href={project.Link} key={index}>
                        <div
                            className={cn(
                                "p-5 rounded-2xl gap-2 h-600", 
                                project.background
                            )}
                        >
                           <Image
                                src={project.cover}
                                alt="ProjectImage"
                                height="700"
                                width="700"
                                className="object-contain rounded-2xl justify-center"
                            />
                            
                            <div className="space-y-1">
                                <h1 className="text-2xl font-bold space-y-5">{project.title}</h1>
                                <div className="flex flex-col gap-4">
                                    {project.tech.map((Icon, index)=>{
                                        return <Icon className="w-8 h-8" key={index} />;
                                    })}
                                </div>
                                <div>
                                    <p className="md:w-80 text-lg text-gray-0">
                                        {project.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>;
                })}
            </div>
            <div className="flex justify-center space-y-20">
                <Link href="https://github.com/K-Ketchup/Personal-Portfolio">
                    <button className="transform hover:translate-y-0.5 transition duration-400 flex inline-flex h-12 w-80 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Github For This Project 😼
                    </button>
                </Link>
            </div>
        </div>
        
    );
}