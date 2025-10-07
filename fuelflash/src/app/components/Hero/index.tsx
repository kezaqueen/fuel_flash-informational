import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative bg-[#4A2C4E] overflow-hidden min-h-[600px] md:min-h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A2C4E] via-[#5A3A5E] to-[#6A2C5E] opacity-90" />
            <div className="absolute inset-0 opacity-30">
                <img
                    src="/images/background.png"
                    alt="Person at gas station"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative container mx-auto px-6 py-32 md:py-40">
                <div className="max-w-2xl">
                    <h1 className="text-white mb-6 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[60px] leading-tight">
                        Never Miss a Fuel Price Change Again
                    </h1>
                    <p className="text-white font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[30px] 2xl:leading-snug">
                        Stay informed with instant SMS alerts whenever fuel prices rise or
                        fall in Rwanda. Make smarter decisions about when to fill up your
                        tank.
                    </p>
                    <button className="bg-[#A8610C] hover:bg-[#A8610C] text-white px-8 py-5 2xl:text-[30px] md:text-lg font-semibold rounded-[50px] transition-colors w-[250px] mt-8">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}