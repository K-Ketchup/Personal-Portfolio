import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/kensho-nishio-cs/",
            Label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            Link: "https://github.com/K-Ketchup",
            Label: "Github",
            Icon: SiGithub,
        },
        {
            Link: "https://stackoverflow.com/users/22091763/k-ketchup",
            Label: "StackOverflow",
            Icon: SiStackoverflow,
        }
    ]

    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Kensho Nishio</h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index)=>{
                    const Icon = social.Icon
                    return <Link href={social.Link} key={index} aria-label={social.Label}>
                        <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                    </Link>
                })}
            </div>
        </nav>
    );
}