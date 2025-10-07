import Image from "next/image";

export function About() {
    return (
        <section id="about" className="bg-white py-8 md:py-12  mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-0.5">
                    <div className="flex-1 flex justify-center relative">
                        <div className="gap-5">
                            <Image
                                src="/images/globe.png"
                                alt="Global fuel network"
                                className="object-contain"
                                width={450}
                                height={450}
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-gray-950 mb-9">
                        <h2 className="text-[#A8610C] font-bold mb-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-[60px]">
                            About Us
                        </h2>
                        <p className="text-[#222] font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[21px] 2xl:leading-snug">
                            Stay informed with instant SMS alerts whenever fuel prices rise or
                            fall in Rwanda. Make smarter decisions about when to fill up your
                            tank. This fast and reliable communication enhances transparency,
                            convenience, and customer engagement in the fuel retail sector.
                        </p>



                    </div>
                </div>
            </div>
        </section>
    );
}