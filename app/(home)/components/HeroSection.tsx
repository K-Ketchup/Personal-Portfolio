import Link from "next/link";
import React from "react"

export default function HeroSection() {
    return <div>
        <div>
            <h1>
                Nice to meet you! 
                <br/> <span>{"I'm Kensho."}</span>
            </h1>
            <p>
                {
                    "I'm a highschool developer based in Los Angeles, California. I enjoy creating mobile applications and low-level programs."
                }
            </p>
            <Link href={"mailto:kenshonishio7@gmail.com"}>
                <div>
                    <h1>Contact Me</h1>
                </div>
            </Link>
        </div>
        <div>
            <div className="w-72 h-72">
                <div className="flex gap-3 translate-x-8">
                    <div className="w-32 h-32 rounded-2x1 bg-green-500"></div>
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-2x1 bg-indigo-500"></div>
                    <div className="w-32 h-32 rounded-full bg-green-500"></div>
                </div>
            </div>
        </div>
    </div>;
}
