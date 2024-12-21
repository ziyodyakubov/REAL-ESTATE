"use client";

import Image from "next/image";
import { HeroTwo, SaleOne, SaleTwo, SaleThree, SaleFour, RentOne, RentTwo} from "@/png";
import { Filter, Bedroom, Bathroom, Garage, Area } from "@/svg";
import "boxicons";

export default function Home() {
    return (
        <>
            {/* SECTION-1 STARTED */}
            <section id="section-1" className="pb-[120px]">
                <div className="container">
                    <Image src={HeroTwo} alt="HeroTwo" />

                    <div className="p-[40px] shadow-xl rounded-[12px] w-[1076px] bg-[#fff] absolute top-[670px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center gap-[12px]">
                            <select className="p-[15px] w-[254px] bg-[#F6F6F6] cursor-pointer h-[50px] outline-none rounded-[5px]" name="category">
                                <option value="category 1">Category</option>
                                <option value="category 2">Category 1</option>
                                <option value="category 3">Category 2</option>
                            </select>

                            <select className="p-[15px] w-[254px] bg-[#F6F6F6] cursor-pointer h-[50px] outline-none rounded-[5px]" name="property">
                                <option value="Property Type">Property Type</option>
                                <option value="Property Type 2">Property Type 1</option>
                                <option value="Property Type 3">Property Type 2</option>
                                <option value="Property Type 4">Property Type 3</option>
                            </select>

                            <select className="p-[15px] w-[254px] bg-[#F6F6F6] h-[50px] cursor-pointer outline-none rounded-[5px]" name="location">
                                <option value="location">Location</option>
                                <option value="tashkent">Tashkent</option>
                                <option value="samarkand">Samarkand</option>
                                <option value="navoiy">Navoiy</option>
                                <option value="bukhara">Bukhara</option>
                            </select>

                            <Image src={Filter} alt="filter" className="cursor-pointer" />

                            <button className="flex text-[#Fff] h-[50px] px-[31px] py-[17px] rounded-[6px] hover:bg-[#0055ffe1] active:bg-[#0057FF] duration-150 transition-all  bg-[#0057FF] items-center gap-[12px] ">
                                <i className='bx bx-search text-[#fff] text-[25px]' ></i> SEARCH
                            </button>

                        </div>
                    </div>

                </div>
            </section>
            {/* SECTION-1 ENDED */}

            {/* SECTION-2 STARTED */}
            <section id="section-2" className="pb-[60px]">
                <div className="container">
                    <div className="wrapper gap-[24px]">
                        <div className="flex flex-wrap items-center gap-[24px]">
                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleOne} alt="SaleOne" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Division Road house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">506 Division Road Pembroke Pines, FL 33028</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$250000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleTwo} alt="SaleTwo" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">North Road house </h3>
                                    <p className="text-[#7A7474] pt-[10px]">19 North Road Piscataway, NJ 08854</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$222000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={RentOne} alt="RentOne" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Bloomfield house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">29 W. Pawnee St.Bloomfield, NJ 07003</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$250000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">4</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">850</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleThree} alt="SaleThree" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Rockville Ave villa</h3>
                                    <p className="text-[#7A7474] pt-[10px]">8460 Rockville Ave. Greenville, NC 27834</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$180000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">5</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">320</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={RentTwo} alt="RentTwo" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Scotch Plains villa</h3>
                                    <p className="text-[#7A7474] pt-[10px]">820 Ohio Road Scotch Plains, NJ 07076</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$160000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleFour} alt="SaleFour" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Lees Creek house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">7916 Lees Creek St. Dayton, OH 45420</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$210000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">480</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper pt-[24px] gap-[24px]">
                        <div className="flex flex-wrap items-center gap-[24px]">
                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleOne} alt="SaleOne" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Division Road house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">506 Division Road Pembroke Pines, FL 33028</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$250000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleTwo} alt="SaleTwo" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">North Road house </h3>
                                    <p className="text-[#7A7474] pt-[10px]">19 North Road Piscataway, NJ 08854</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$222000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={RentOne} alt="RentOne" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Bloomfield house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">29 W. Pawnee St.Bloomfield, NJ 07003</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$250000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">4</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">850</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleThree} alt="SaleThree" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Rockville Ave villa</h3>
                                    <p className="text-[#7A7474] pt-[10px]">8460 Rockville Ave. Greenville, NC 27834</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$180000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">5</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">320</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={RentTwo} alt="RentTwo" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Scotch Plains villa</h3>
                                    <p className="text-[#7A7474] pt-[10px]">820 Ohio Road Scotch Plains, NJ 07076</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$160000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1200</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">2</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
                                <Image src={SaleFour} alt="SaleFour" />

                                <div className="bg-[#fff] p-[24px]">
                                    <h3 className="text-[20px] font-[600]">Lees Creek house</h3>
                                    <p className="text-[#7A7474] pt-[10px]">7916 Lees Creek St. Dayton, OH 45420</p>

                                    <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">$210000</h2>

                                    <div className="flex pt-[10px] items-center gap-[37px]">
                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bedroom} alt="bedroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">3</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bedrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Bathroom} alt="bathroom" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Bathrooms</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Area} alt="area" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">480</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Total area</h2>
                                        </div>

                                        <div className="flex gap-[12px] flex-col">
                                            <div className="flex items-center gap-[8px]">
                                                <Image src={Garage} alt="garage" />
                                                <h3 className="text-[#100E2C] font-[500] text-[16px]">1</h3>
                                            </div>
                                            <h2 className="text-[#100E2C] font-[500] text-[14px]">Garages</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-2 ENDED */}
        </>
    );
}
