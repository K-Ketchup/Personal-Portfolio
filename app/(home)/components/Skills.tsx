"use client";
import React from "react"
import Title from "./Title";

export default function Skills() {
    return (
        <div className="space-y-5">
            <Title text="Experience" className="flex flex-col items-center justify-center -rotate-6"/>
            <div className="space-y-10 text-center lg:text-center flex justify-center">
                <p className="md:w-80 text-lg text-gray-300">
                    {
                        "Taken with a grain of salt. I have been coding on and off, so these are bound to be quite unaccurate."
                    }
                </p>
            </div>
        </div>
    );
}
