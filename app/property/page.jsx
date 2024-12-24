"use client";

import Image from "next/image";
import { HeroTwo, SaleOne, SaleTwo, SaleThree, SaleFour, RentOne, RentTwo } from "@/png";
import { Filter, Bedroom, Bathroom, Garage, Area } from "@/svg";
import "boxicons";

export default function Home() {
    const properties = [
        {
            image: SaleOne,
            title: "Division Road house",
            address: "506 Division Road Pembroke Pines, FL 33028",
            price: "$250000",
            details: { Bedrooms: 3, Bathrooms: 2, Area: 1200, Garages: 3 },
        },
        {
            image: SaleTwo,
            title: "North Road house",
            address: "19 North Road Piscataway, NJ 08854",
            price: "$222000",
            details: { Bedrooms: 2, Bathrooms: 3, Area: 1200, Garages: 1 },
        },
        {
            image: RentOne,
            title: "Bloomfield house",
            address: "29 W. Pawnee St.Bloomfield, NJ 07003",
            price: "$250000",
            details: { Bedrooms: 4, Bathrooms: 2, Area: 850, Garages: 2 },
        },
        {
            image: SaleThree,
            title: "Rockville Ave villa",
            address: "8460 Rockville Ave. Greenville, NC 27834",
            price: "$180000",
            details: { Bedrooms: 5, Bathrooms: 2, Area: 320, Garages: 2 },
        },
        {
            image: RentTwo,
            title: "Scotch Plains villa",
            address: "820 Ohio Road Scotch Plains, NJ 07076",
            price: "$160000",
            details: { Bedrooms: 2, Bathrooms: 2, Area: 1200, Garages: 2 },
        },
        {
            image: SaleFour,
            title: "Lees Creek house",
            address: "7916 Lees Creek St. Dayton, OH 45420",
            price: "$210000",
            details: { Bedrooms: 3, Bathrooms: 1, Area: 480, Garages: 1 },
        }
    ];

    const PropertyCard = ({ property }) => (
        <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
            <Image src={property.image} alt={property.title} />

            <div className="bg-[#fff] p-[24px] sm:p-[16px]">
                <h3 className="text-[20px] sm:text-[16px] font-[600]">{property.title}</h3>
                <p className="text-[#7A7474] pt-[10px] sm:text-[13px]">{property.address}</p>

                <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600] sm:text-[18px]">
                    {property.price}
                </h2>

                <div className="flex pt-[10px] items-center gap-[37px]">
                    {Object.entries(property.details).map(([key, value]) => (
                        <div key={key} className="flex gap-[12px] sm:gap-[8px] flex-col">
                            <div className="flex items-center sm:gap-[4px] gap-[8px]">
                                <Image className="sm:w-[20px]" src={getIcon(key)} alt={key} />
                                <h3 className="text-[#100E2C] font-[500] text-[16px] sm:text-[12px]">{value}</h3>
                            </div>
                            <h2 className="text-[#100E2C] font-[500] text-[14px] sm:text-[12px]">{key}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const getIcon = (key) => {
        const icons = {
            Bedrooms: Bedroom,
            Bathrooms: Bathroom,
            Area: Area,
            Garages: Garage,
        };
        return icons[key];
    };

    return (
        <>
            {/* SECTION-1 STARTED */}
            <section id="section-1" className="pb-[120px] sm:px-[20px] sm:pb-[40px]">
                <div className="container">
                    <Image className="rounded-[12px]" src={HeroTwo} alt="HeroTwo" />

                    <div className="p-[40px] sm:hidden shadow-xl rounded-[12px] w-[1076px] bg-[#fff] absolute top-[670px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

                    <div className="wrapper sm:px-[20px] sm:gap-[12px] gap-[24px]">
                        <div className="flex flex-wrap items-center gap-[24px]">
                            {properties.map((property, index) => (
                                <PropertyCard key={index} property={property} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION-2 ENDED */}
        </>
    );
}
