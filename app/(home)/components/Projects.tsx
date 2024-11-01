import React from 'react';
import Title from "./Title";
import { SiNextdotjs, SiReactquery, SiTailwindcss, SiXaml, SiCsharp, SiMicrosoftazure, SiPython, SiTensorflow, SiKeras, SiUnity, SiAseprite } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { cn } from '@/lib/utils';
import { BackgroundGradient } from "@/components/ui/Background-Gradient";

export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            tech: [SiNextdotjs, SiTailwindcss, SiReactquery],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "A website to showcase my skills and projects. Made using Next.js, TypeScript, and React. You can also take a look at my middle school website above!",
        },
        {
            title: "Dook",
            tech: [SiXaml, SiCsharp, SiMicrosoftazure],
            cover: "/brownemotiondetector.png",
            background: "bg-red-400",
            text: "Utility iOS and Android mobile application made using .NET MAUI. The backend is C#, frontend is XAML, and every user input is logged in an Azure database using SQL.",
        },
        {
            title: "Facial Emotion AI",
            tech: [SiPython, SiTensorflow, SiKeras],
            cover: "/brownemotiondetector.png",
            background: "bg-red-400",
            text: "An AI facial emotion detector created with Python and Tensorflow. Uses a convolution neural network to plot facial landmarks, measure euclidian distances between them, and evaluate an emotion.",
        },
        {
            title: "Evacuation Drill AI",
            tech: [SiCsharp, SiUnity],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "An AI school evacuation drill simulator that analyzes clog points and crowds during evacuation using neural networks to produce optimal paths for evacuation. Made using Unity and C#.",
        },
        {
            title: "Digital Diary",
            tech: [SiCsharp, SiUnity],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "A digital diary made using Unity and C#. All data can be exported through a .txt file.",
        },
        {
            title: "Digital License Register",
            tech: [SiCsharp, SiUnity],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-400",
            text: "A digital driver's license catalog made using Unity and C#.",
        },
        {
            title: "Library Database",
            tech: [FaJava],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-400",
            text: "A text-based Java library database. Can be used to log data of different books/movies/articles and can also account for monthly pay. All data can be exported through a .txt file.",
        },
        {
            title: "Video Games",
            tech: [SiCsharp, SiUnity, SiAseprite],
            cover: "/brownpersonalportfolio.png",
            background: "bg-red-500",
            text: "Consists of several different games created solo using Unity and C#. All sprites, animations, level design, and sound design is by me.",
        },
    ];

    return (
        <div className="py-50 pt-5 p-5 sm:p-0 space-y-10">
            <Title text="Projects" className="flex flex-col items-center justify-center rotate-6 mt-20"/>
            <div className="space-y-5 py-3 text-center lg:text-center flex justify-center">
                <p className="md:w-80 text-lg text-gray-300">
                    {
                        "Here are some projects I've worked on over the years!"
                    }
                </p>
            </div>
            <div className="py-26"></div>
            <div className="py-26">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2">
                    {projects.map((project, index)=>{
                        return <div key={index}>
                            <div
                                className={cn(
                                    "p-5 rounded-2xl gap-4 h-100 mt-15", 
                                    project.background
                                )}>

                            <Image
                                    src={project.cover}
                                    alt="ProjectImage"
                                    height="700"
                                    width="700"
                                    className="object-contain rounded-2xl justify-center max-h-[380]"
                                />

                                <div className="flex flex-col py-2 space-y-2">
                                    <div className="flex flex-row space-x-4">
                                        <h1 className="text-2xl font-bold space-y-5">{project.title}</h1>
                                        <div className="flex flex-row gap-4">
                                            {project.tech.map((Icon, index)=>{
                                                return <Icon className="w-8 h-8" key={index} />;
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                    <p className="md:w-140 text-lg text-gray-0">
                                            {project.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
                <div className="flex justify-center space-y-10 py-10">
                    <Link href="https://github.com/K-Ketchup/Personal-Portfolio">
                        <button className="transform hover:translate-y-0.5 transition duration-400 flex inline-flex h-12 w-80 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Github For This Project 😼
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}