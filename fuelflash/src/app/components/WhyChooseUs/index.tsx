'use client';
import Image from 'next/image';
import React from 'react';

const benefits = [
  {
    title: "Eco-Driving Tips",
    img: "/Images/eco-driving.png",
    label: "Eco-Driving Tips Icon",
    description:
      "Use fuel price alerts to plan trips and drive smoothly to save fuel and money.",
  },
  {
    title: "Expense Tracking",
    img: "/Images/fuelExpense.png",
    label: "Expense Tracking Icon",
    
    description:
      "Track fuel expenses alongside price alerts to budget better and avoid surprises.",
  },
  {
    title: "Budgeting",
    img: "/Images/budgeting.png",
    label: "Budgeting Icon",
    description:
      "Use fuel price alerts to budget fuel costs smartly and avoid overspending.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="benefits"
      className="
        w-full min-h-[30vh]
        bg-white
        py-8 sm:py-12 px-2 sm:px-8
        flex flex-col items-center
        mt-20
      "
    >
      <h2 className="text-[#000000] 2xl:text-4xl text-2xl sm:text-3xl font-extrabold text-center mb-3 sm:mb-4 tracking-tight drop-shadow-sm whitespace-nowrap">
        Why choose Fuel Flash
      </h2>
      <p className="text-[#222] text-center 2xl:ml-[-8%] mb-8 text-base text-md 2xl:text-[125%] lg:text-lg xl:text-xl font-medium max-w-2xl opacity-90 xl:whitespace-nowrap">
        Fuel Flash keeps you informed of fuel price changes so you can save money and avoid surprises.
      </p>
 <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 mt-4 px-2">
        {benefits.map((item,index) => (
          <div key={index} className="flex flex-col items-center flex-1 max-w-xs mx-auto">
            <Image
              src={item.img}
              width={100}
              height={100}
              alt={item.label}
              className="mb-2 "
            />
            <h4 className="font-bold text-lg text-center mb-2 whitespace-nowrap 2xl:text-2xl text-black ">{item.title}</h4>
   <p className="text-center text-[#333] text-base font-medium leading-snug 2xl:text-[125%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}