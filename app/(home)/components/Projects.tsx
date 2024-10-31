import React from 'react';
import Title from "./Title";
import { SiNextdotjs, SiReactquery, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            tech: [SiNextdotjs, SiTailwindCSS, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/Brown --- Personal Portfolio.png",
            background: "bg-indigo-500",
        },
        {
            title: "Dook App",
            tech: [SiNextdotjs, SiTailwindCSS, SiReactquery],
            Link: "https://imkenshonishio.vercel.app/",
            cover: "/Brown --- Personal Portfolio.png",
            background: "bg-indigo-500",
        },
    ]
    return <div className="py-10 p-5 sm:p-0">
        <Title
            text="Projects"

            className="flex flex-col items-center justify-center rotate-6"
        />
    </div>;
}