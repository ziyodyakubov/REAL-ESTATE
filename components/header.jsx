"use client";

import Image from "next/image";
import "boxicons";
import { Logo } from "@/svg";
import Link from "next/link";

const Index = () => {
    return (
        <>
            {/* HEADER SECTION STARTED */}
            <header className="py-[24px] bg-[#fff]">
                <div className="flex container items-center justify-between">
                    <Image className="cursor-pointer" src={Logo} alt="logo" />

                    <ul className="flex gap-[24px] items-center">
                        <li><Link href="/" className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300">Home</Link></li>
                        <li><Link href="/property" className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300">Property</Link></li>
                        <li><Link href="/about" className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300">About us</Link></li>
                        <li><Link href="/contact" className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300">Contact us</Link></li>
                    </ul>

                    <div className="flex gap-[24px] items-end">
                        <div className="first-div flex items-center gap-[8px]">
                            <box-icon name="user-circle"></box-icon>
                            <h2 className="text-[16px] font-[500] cursor-pointer">Login</h2>
                        </div>

                        <div className="first-div flex items-center gap-[8px]">
                            <box-icon name="phone"></box-icon>
                            <h2 className="text-[16px] font-[500] cursor-pointer">
                                (257) 388-6895
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
            {/* HEADER SECTION ENDED */}
        </>
    );
};

export default Index;
