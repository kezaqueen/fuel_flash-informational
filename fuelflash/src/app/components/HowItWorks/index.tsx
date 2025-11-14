export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-12 md:py-5 relative mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-950 font-bold mb-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-[40px]">
            How Fuel Flash Works
          </h2>
          <p className="text-[#222] font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[21px] 2xl:leading-snug">
            Simple, reliable, and instant notifications delivered straight to your phone
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-[-120px] md:mb-[-140px] relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src="/Images/phone 1.png"
              alt="Onboarding"
              className="w-full max-w-[180px] h-auto  drop-shadow-2xl" 
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Images/phone 2.png"
              alt="Subscribe"
              className="w-full max-w-[180px] h-auto drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/phone 3.png"
              alt="SMS Alerts"
              className="w-full max-w-[180px] h-auto  drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/phone 4.png"
              alt="Save Money"
              className="w-full max-w-[180px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#D2954C] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#A8610C] flex items-center justify-center 2xl:text-[20px] font-bold text-primary">
                1
              </div>
              <h3 className="text-white font-bold 2xl:text-[30px] sm:text-lg md:text-xl">
                Onboarding
              </h3>
            </div>
            <p className="text-white font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[20px] 2xl:leading-snug">
              Dial : *384*33121#
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#A8610C] flex items-center justify-center 2xl:text-[20px] font-bold text-primary">
                2
              </div>
              <h3 className="text-white font-bold 2xl:text-[30px] sm:text-lg md:text-xl">
                Subscribe
              </h3>
            </div>
          <p className="text-white font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[20px] 2xl:leading-snug">
              Subscribe to our platform
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#A8610C] flex items-center justify-center 2xl:text-[20px] font-bold text-primary">
                3
              </div>
              <h3 className="text-white font-bold 2xl:text-[30px] sm:text-lg md:text-xl">
                SMS Alerts
              </h3>
            </div>
            <p className="text-white font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[20px] 2xl:leading-snug">
              Receive instant SMS fuel prices
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#A8610C] flex items-center justify-center 2xl:text-[20px] font-bold text-primary">
                4
              </div>
              <h3 className="text-white font-bold 2xl:text-[30px] sm:text-lg md:text-xl">
                Save Money
              </h3>
            </div>
             <p className="text-white font-normal sm:text-lg sm:leading-loose md:text-xl md:leading-loose xl:text-lg xl:leading-loose 2xl:text-[20px] 2xl:leading-snug">
              And plan for your future savings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}