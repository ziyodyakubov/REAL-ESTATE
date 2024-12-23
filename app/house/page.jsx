"use client";

import Image from "next/image";
import { HeyFour, HeyFive, HeySix, HouseOne, HouseTwo } from "@/png";
import "boxicons";
import { AvaGet, Bathrooms, Bedrooms, Construction, Elevator, Floor, Parking, TotalArea, Tv, WiFi } from "@/svg";

export default function Home() {
    return (
        <>
            {/* SECTION-1 STARTED */}
            <section id="section-1" className="mb-[60px]">
                <div className="container">
                    <button className="py-[10px] mb-[16px] px-[32px] w-[137px] rounded-[6px] cursor-pointer hover:bg-[#8eda53df] active:bg-[#8EDA53] duration-150 transition-all bg-[#8EDA53] text-[20px] text-[#fff]">For sale</button>

                    <div className="flex items-center mb-[40px] justify-between">
                        <div className="flex flex-col gap-[2px]">
                            <h2 className="text-[50px] text-[#100E2C] font-[600]">Amazing modern apartment</h2>
                            <p className="text-[20px] text-[#0000008a]">43 W. Wellington Road Fairhope, AL 36532</p>
                        </div>


                        <div className="flex flex-col gap-[2px]">
                            <h2 className="text-[50px] font-[600]">$120.000</h2>
                            <p className="text-[20px] text-[#0000008a]">$1200/sq.ft</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-[24px]">
                        <Image className="cursor-pointer" src={HouseOne} alt="house-1" />

                        <div className="flex gap-[24px] flex-col">
                            <Image className="cursor-pointer" src={HouseTwo} alt="house-2" />

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.210497847105!2d69.26982307624603!3d41.369511171302264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d002d934c69%3A0xacd1c867c828dce5!2sYunusobod%20Residence!5e0!3m2!1sen!2s!4v1734938673512!5m2!1sen!2s" className="rounded-[12px] filter grayscale" style={{}} width="416" height="260" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-1 ENDED */}

            {/* SECTION-2 STARTED */}
            <section id="section-2" className="mb-[40px]">
                <div className="container">
                    <div className="flex items-start justify-between">
                        <div className="text w-[856px]">
                            <h3 className="text-[28px] font-[600] text-[#100E2C] pb-[14px]">Description</h3>

                            <p className="pb-[40px]">Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus sed ultricies. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla accumsan enim ac ullamcorper.<br></br><br></br>
                                Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est. Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo. Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor porta. Pharetra netus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer.
                            </p>

                            <h3 className="text-[28px] font-[600] text-[#100E2C] pb-[15px]">Property details</h3>

                            <div className="flex items-start justify-between">
                                <div className="one">
                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={TotalArea} alt="total area"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Total area</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">100 sq.ft</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Bedrooms} alt="Bedrooms"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Bedrooms</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">2</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Bathrooms} alt="Bathrooms"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Bathrooms</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">2</h2>
                                    </div>


                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Floor} alt="Floor"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Floor</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">3rd</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Construction} alt="Construction"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Construction</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">2020</h2>
                                    </div>
                                </div>

                                <div className="two">
                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Elevator} alt="Elevator"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Elevator</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">2</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Parking} alt="Parking"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Parking</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">Yes</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={WiFi} alt="WiFi"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Wi-FI</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">Yes</h2>
                                    </div>

                                    <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between w-[416px]">
                                        <div className="flex items-center gap-[9px]">
                                            <Image src={Tv} alt="WiFi"/>

                                            <h2 className="text-[#7A7474] text-[20px] font-[500]">Cable TV</h2>
                                        </div>

                                        <h2 className="text-[20px] font-[500]">Yes</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="registration w-[416px] h-[640px] bg-[#100E2C] rounded-[12px] text-[#fff] p-[40px]">
                            <h2 className="text-[28px] font-[700] pb-[10px]">Contact agent</h2>

                            <div className="flex mb-[20px] items-center gap-[12px]">
                                <Image src={AvaGet} className="w-[60px]" alt="avaget" />

                                <div className="flex flex-col gap-[2px]">
                                    <h2 className="text-[16px] font-[500]">Emilia Buck</h2>
                                    <p className="text-[14px] text-[#ffffffbe]">(437) 402-2459</p>
                                    <p className="text-[14px] text-[#ffffffbe]">rsmartin@optonline.net</p>
                                </div>

                            </div>

                            <form className="flex flex-col gap-[20px] items-start" action="" method="POST">
                                <input
                                    type="text"
                                    id=""
                                    name="name"
                                    placeholder="Your name"
                                    className="p-[16px] bg-white rounded-[6px] w-[336px] outline-none text-[#666]"
                                />

                                <input
                                    type="email"
                                    id=""
                                    name="mail"
                                    placeholder="Your mail"
                                    className="p-[16px] bg-white rounded-[6px] w-[336px] outline-none text-[#666]"
                                />

                                <input
                                    type="number"
                                    id=""
                                    name="phone"
                                    placeholder="Your phone"
                                    className="p-[16px] bg-white rounded-[6px] w-[336px] outline-none text-[#666]"
                                />

                                <textarea
                                    id="id"
                                    name="name"
                                    placeholder="Your message"
                                    className="py-[8px] px-[16px] rounded-[6px] w-[336px] h-[108px] outline-none text-[#666]"
                                />

                                <button type="submit" className="w-[200px] mt-[15px] h-[50px] bg-[#0057FF] active:bg-[#0057FF] transition-all duration-200 hover:bg-[#0055ffd5] rounded-[6px]">Send message</button>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-2 ENDED */}
        </>
    );
}