"use client";

import Image from "next/image";
import { HeroOne, SaleOne, SaleTwo, SaleThree, SaleFour, RentOne, RentTwo, HeroFour, SaleOneLittle, SaleTwoLittle, SaleThreeLittle, RentOneLittle } from "@/png";
import { Filter, Bedroom, Bathroom, Garage, Area } from "@/svg";
import { HeroThree, NewYork, Boston, Chicago, Washington, Miami } from "@/png";
import "boxicons";

export default function Home() {
  return (
    <>
      {/* SECTION-1 STARTED */}
      <section id="section-1" className="pb-[120px]">
        <div className="container">
          <Image src={HeroOne} alt="HeroOne" />

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
          <h1 className="text-[#100E2C] text-center font-[700] text-[50px] ">Discover your featured property</h1>
          <p className="text-center pt-[5px] pb-[40px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

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
        </div>
      </section>
      {/* SECTION-2 ENDED */}

      {/* SECTION-3 STARTED */}
      <section className="py-[100px] bg-[#100E2C]" id="section-3">
        <div className="container">
          <div className="flex pl-[110px] pr-[140px] gap-[134px] items-center justify-between">
            <Image src={HeroThree} alt="HeroThree" />

            <div className="w-[498px] ">
              <h2 className="font-[700] text-[39px] pb-[40px] text-[#fff]">Putting a plan to action,<br></br> to assure your satisfaction!</h2>

              <p className="pb-[40px] text-[#fff]">Ultrices quis at enim in tristique in id diam suspendisse. Sed fermentum velit id et donec dui. Sed nulla neque at phasellus in adipiscing dictum. </p>

              <button className="rounded-[6px] bg-[#0057FF] hover:bg-[#0055ffd7] transition-all duration-300 active:bg-[#0057FF] w-[200px] h-[50px] text-[#fff]">
                Learn more
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* SECTION-3 ENDED */}

      {/* SECTION-4 STARTED */}
      <section className="pt-[100px] pb-[60px]" id="section-4">
        <div className="container pl-[110px] gap-[134px]  flex items-center pr-[292px]">
          <div className="w-[416px] text-center ">
            <h2 className="text-[#100E2C] text-[40px] pb-[10px] font-[700] line-through-[50px]">What our clietns say<br></br>
              about us</h2>

            <p className="text-[20px]">Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit euismod erat praesent. Tincidunt semper interdum fames cras </p>

            <h4 className="pt-[20px] text-[20px] font-[600]">Miya Monroe</h4>
            <p className="pt-[2px] text-[#7A7474]">Buyer</p>
          </div>

          <Image src={HeroFour} alt="HeroFour" />
        </div>
      </section>
      {/* SECTION-4 ENDED */}

      {/* SECTION-5 STARTED */}
      <section className="py-[60px]" id="section-5">
        <div className="container">
          <h2 className="text-center text-[#100E2C] text-[50px] font-[700] pb-[10px]">Commercial property</h2>
          <p className="text-center pb-[40px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

          <div className="flex flex-wrap gap-[24px] items-center">
            <div className="card">
              <Image src={SaleOneLittle} alt="Sale One Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">Pembroke Pines office</h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">$150000</h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Image src={RentOneLittle} alt="Rent One Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">Sulphur office</h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">$2500/mo</h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Image src={SaleTwoLittle} alt="Sale Two Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">Hamden depot</h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">$120000</h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Image src={SaleThreeLittle} alt="Sale Three Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">Fairground office</h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">$200000</h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-5 ENDED */}

      {/* SECTION-6 STARTED */}
      <section className="py-[60px]" id="section-6">
        <div className="container pl-[110px] pr-[136px] flex items-center gap-[136px]">
          <div className="registration w-[416px] h-[610px] bg-[#100E2C] rounded-[12px] text-[#fff] p-[40px]">
            <h2 className="text-[28px] font-[700] pb-[10px]">Get in touch</h2>

            <p className="pb-[20px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>

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

              <button type="submit" className="w-[200px] h-[50px] bg-[#0057FF] active:bg-[#0057FF] transition-all duration-200 hover:bg-[#0055ffd5] rounded-[6px]">Send message</button>
            </form>


          </div>

          <div className="text text-[#Fff]">
            <h2 className="text-[40px] font-[700] pb-[30px]">Putting a plan to action,<br></br>
              to assure your satisfaction! </h2>

            <p>Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit</p>
          </div>
        </div>
      </section>
      {/* SECTION-6 ENDED */}

      {/* SECTION-7 STARTED */}
      <section className="py-[60px]" id="section-7">
        <div className="container">
          <h1 className="text-[#100E2C] text-center text-[50px] pb-[14px] font-[700]">What city will you live in?</h1>

          <p className="text-center pb-[40px]">Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus.<br></br> Porttitor fermentum eu urna eget</p>

          <div className="flex items-center gap-[24px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-[24px] pb-[24px]">
              <Image src={NewYork} alt="Newyork"/>
              <Image src={Boston} alt="Boston"/>
            </div>

            <div className="flex items-center gap-[24px]">
              <Image src={Washington} alt="Washington"/>
              <Image src={Miami} alt="Miami"/>
            </div>
          </div>

          <Image src={Chicago} alt="chicago"/>
          </div>

        </div>
      </section>
      {/* SECTION-7 ENDED */}
    </>
  );
}
