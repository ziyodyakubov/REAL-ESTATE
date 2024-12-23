"use client";

import Image from "next/image";
import { AboutHero, Expert, PersonOne, PersonTwo, PersonThree, PersonFour, Real, HeyOne, HeyTwo, HeyThree } from "@/png";
import { HomeHeart, Apartment, Homes, Zavod, HomeGroup, HomeGroup2, BankGroup, IconOne, IconTwo, IconThree, IconFour, IconFive } from "@/svg";
import "boxicons";

export default function Home() {
    return (
        <>
            {/* SECTION-1 STARTED */}
            <section id="section-1" className="pb-[120px]">
                <div className="container">
                    <div className="">
                        <Image src={AboutHero} alt="AboutHero" />

                        <div className="shadow-lg rounded-b-[12px] p-[20px]">
                            <div className="flex items-center gap-[95px]">
                                <div className="p-[40px] flex flex-col gap-[14px] items-center">
                                    <Image src={HomeHeart} alt="home heart" />

                                    <h1 className="text-[50px] text-[#100E2C] font-[700]">1250</h1>

                                    <h3 className="text-[24px] text-[#100E2C] font-[500]">Properties sold</h3>
                                </div>

                                <div className="p-[40px] flex flex-col gap-[14px] items-center">
                                    <Image src={Apartment} alt="Apartment" />

                                    <h1 className="text-[50px] text-[#100E2C] font-[700]">320</h1>

                                    <h3 className="text-[24px] text-[#100E2C] font-[500]">Apartments sold</h3>
                                </div>

                                <div className="p-[40px] flex flex-col gap-[14px] items-center">
                                    <Image src={Homes} alt="homes" />

                                    <h1 className="text-[50px] text-[#100E2C] font-[700]">125</h1>

                                    <h3 className="text-[24px] text-[#100E2C] font-[500]">Houses sold</h3>
                                </div>

                                <div className="p-[40px] flex flex-col gap-[14px] items-center">
                                    <Image src={Zavod} alt="Zavod" />

                                    <h1 className="text-[50px] text-[#100E2C] font-[700]">120</h1>

                                    <h3 className="text-[24px] text-[#100E2C] font-[500]">Villas sold</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-1 ENDED */}

            {/* SECTION-2 STARTED */}
            <section id="section-2">
                <div className="container pb-[120px]">
                    <div className="flex items-center gap-[134px] pl-[110px]">
                        <Image src={Expert} className="w-[416px]" alt="Expert" />

                        <div className="w-[526px]">
                            <h2 className="text-[#100E2C] text-[40px] font-[700] pb-[40px]">Expert advice for all your real estate needs</h2>

                            <p>Pretium interdum risus risus facilisis cras pellentesque ipsum suspendisse venenatis. Morbi posuere semper etiam imperdiet orci ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum lacinia aenean nec.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-2 ENDED */}

            {/* SECTION-3 STARTED */}
            <section id="section-3" className="mb-[60px]">
                <div className="container pl-[110px]">
                    <h2 className="text-[#100E2C] text-[40px] text-center pb-[24px] font-[700]">Our client’s success is our success.</h2>

                    <p className="text-center pb-[40px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu urna eget</p>

                    <div className="flex items-center gap-[24px]">
                        <div className="p-[40px] items-center w-[342px] text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
                            <Image src={HomeGroup} alt="home group" />
                            <h3 className="text-[24px] font-[700]">Buy a property</h3>

                            <p className="text-center">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu </p>

                            <button className="text-[20px] font-[500] bg-[#0057FF] rounded-[6px] w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">Find property</button>
                        </div>

                        <div className="p-[40px] items-center w-[342px] text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
                            <Image src={BankGroup} alt="Bank group" />
                            <h3 className="text-[24px] font-[700]">Sell a property</h3>

                            <p className="text-center">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu </p>

                            <button className="text-[20px] font-[500] bg-[#0057FF] rounded-[6px] w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">Learn more</button>
                        </div>

                        <div className="p-[40px] items-center w-[342px] text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
                            <Image src={HomeGroup2} alt="home group 2" />
                            <h3 className="text-[24px] font-[700]">Buy a property</h3>

                            <p className="text-center">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus. Porttitor fermentum eu </p>

                            <button className="text-[20px] font-[500] bg-[#0057FF] rounded-[6px] w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">Find a rent</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-3 ENDED */}

            {/* SECTION-4 STARTED */}
            <section id="section-4-2" className="mb-[60px] h-[480px]">
                <div className="container pl-[110px]">
                    <h2 className="pt-[205px] text-[50px] text-[#fff] font-[700] pb-[4px]">Discover your featured property</h2>

                    <p className="text-[#fff]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
                </div>
            </section>
            {/* SECTION-4 ENDED */}

            {/* SECTION-5 STARTED */}
            <section id="section-5" className="mb-[60px]">
                <div className="container">
                    <h1 className="pb-[4px] text-center text-[#100E2C] text-[50px] font-[700]">Our professional agents</h1>

                    <p className="text-center pb-[40px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

                    <div className="flex items-center flex-wrap gap-[24px]">
                        <div className="flex w-[636px] h-[256px] p-[15px] gap-[20px] rounded-[12px] shadow-lg">
                            <Image src={PersonOne} alt="person-1" />

                            <div className="flex flex-col">
                                <h3 className="text-[24px] font-[600] pb-[5px]">Terrell Norman</h3>

                                <p className="pb-[5px] text-[14px] font-[500] text-[#100E2C]">Real estate agent</p>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Office </h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(358) 707-4989</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Mobile</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(822) 622-2842</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Email</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">shrapnull@yahoo.ca</p>
                                </div>

                                <div className="flex items-center gap-[16px] pt-[24px]">
                                    <Image src={IconOne} alt="IconOne" />
                                    <Image src={IconTwo} alt="IconTwo" />
                                    <Image src={IconThree} alt="IconThree" />
                                    <Image src={IconFour} alt="IconFour" />
                                    <Image src={IconFive} alt="IconFive" />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[636px] h-[256px] p-[15px] gap-[20px] rounded-[12px] shadow-lg">
                            <Image src={PersonTwo} alt="person-1" />

                            <div className="flex flex-col">
                                <h3 className="text-[24px] font-[600] pb-[5px]">Terrell Norman</h3>

                                <p className="pb-[5px] text-[14px] font-[500] text-[#100E2C]">Real estate agent</p>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Office </h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(358) 707-4989</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Mobile</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(822) 622-2842</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Email</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">shrapnull@yahoo.ca</p>
                                </div>

                                <div className="flex items-center gap-[16px] pt-[24px]">
                                    <Image src={IconOne} alt="IconOne" />
                                    <Image src={IconTwo} alt="IconTwo" />
                                    <Image src={IconThree} alt="IconThree" />
                                    <Image src={IconFour} alt="IconFour" />
                                    <Image src={IconFive} alt="IconFive" />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[636px] h-[256px] p-[15px] gap-[20px] rounded-[12px] shadow-lg">
                            <Image src={PersonThree} alt="person-1" />

                            <div className="flex flex-col">
                                <h3 className="text-[24px] font-[600] pb-[5px]">Terrell Norman</h3>

                                <p className="pb-[5px] text-[14px] font-[500] text-[#100E2C]">Real estate agent</p>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Office </h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(358) 707-4989</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Mobile</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(822) 622-2842</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Email</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">shrapnull@yahoo.ca</p>
                                </div>

                                <div className="flex items-center gap-[16px] pt-[24px]">
                                    <Image src={IconOne} alt="IconOne" />
                                    <Image src={IconTwo} alt="IconTwo" />
                                    <Image src={IconThree} alt="IconThree" />
                                    <Image src={IconFour} alt="IconFour" />
                                    <Image src={IconFive} alt="IconFive" />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[636px] h-[256px] p-[15px] gap-[20px] rounded-[12px] shadow-lg">
                            <Image src={PersonFour} alt="person-1" />

                            <div className="flex flex-col">
                                <h3 className="text-[24px] font-[600] pb-[5px]">Terrell Norman</h3>

                                <p className="pb-[5px] text-[14px] font-[500] text-[#100E2C]">Real estate agent</p>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Office </h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(358) 707-4989</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Mobile</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">(822) 622-2842</p>
                                </div>

                                <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between gap-[200px]">
                                    <h3 className="text-[14px] font-[600]">Email</h3>

                                    <p className="text-[14px] font-[600] text-[#7A7474]">shrapnull@yahoo.ca</p>
                                </div>

                                <div className="flex items-center gap-[16px] pt-[24px]">
                                    <Image src={IconOne} alt="IconOne" />
                                    <Image src={IconTwo} alt="IconTwo" />
                                    <Image src={IconThree} alt="IconThree" />
                                    <Image src={IconFour} alt="IconFour" />
                                    <Image src={IconFive} alt="IconFive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-5 ENDED */}

            {/* SECTION-6 STARTED */}
            <section id="section-6-2" className="py-[60px]">
                <div className="container pl-[110px]">
                    <div className="flex items-center gap-[134px]">
                        <div className="flex flex-col gap-[30px] items-start w-[526px]">
                            <h2 className="text-[40px] font-[700]">Real estate, personalized for you</h2>

                            <p>Pretium interdum risus risus facilisis cras pellentesque ipsum suspendisse venenatis. Morbi posuere semper etiam imperdiet orci ut. Lacus odio arcu massa porttitor curabitur a in. Faucibus ipsum lacinia aenean nec.</p>

                            <button className="text-[20px] font-[500] text-[#fff] bg-[#0057FF] hover:bg-[#0055ffdf] duration-200 transition-all active:bg-[#0057FF] rounded-[6px] w-[200px] h-[50px]">Learn more</button>
                        </div>

                        <Image src={Real} alt="realback"/>
                    </div>
                </div>
            </section>
            {/* SECTION-6 ENDED */}

            {/* SECTION-7 STARTED */}
            <section id="section-7" className="py-[60px]">
                <div className="container">
                    <h2 className="text-center text-[#100E2C] text-[50px] font-[700] pb-[14px]">Blog news</h2>

                    <p className="pb-[40px] text-center">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

                    <div className="flex items-center gap-[20px] flex-wrap">
                        <div className="flex flex-col w-[416px]">
                            <Image src={HeyOne} alt="HeyOne"/>

                            <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">23.12.2023</p>

                            <h2 className="text-[24px] font-[600] pb-[16px]">Home sales start to rise</h2>

                            <p className="text-[#7A7474]">Nam eget habitasse semper turpis. Ultrices vitae tristique sem nulla ornare massa id in. </p>
                        </div>

                        <div className="flex flex-col w-[416px]">
                            <Image src={HeyTwo} alt="HeyTwo"/>

                            <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">23.12.2023</p>

                            <h2 className="text-[24px] font-[600] pb-[16px]">Real estate and design trends</h2>

                            <p className="text-[#7A7474]">Nam eget habitasse semper turpis. Ultrices vitae tristique sem nulla ornare massa id in. </p>
                        </div>

                        <div className="flex flex-col w-[416px]">
                            <Image src={HeyThree} alt="HeyThree"/>

                            <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">23.12.2023</p>

                            <h2 className="text-[24px] font-[600] pb-[16px]">Mortgage rates dip below 7%</h2>

                            <p className="text-[#7A7474]">Nam eget habitasse semper turpis. Ultrices vitae tristique sem nulla ornare massa id in. </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-7 ENDED */}
        </>
    );
}
