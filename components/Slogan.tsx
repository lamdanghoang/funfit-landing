import Image from "next/image";

const Slogan = () => {
  return (
    <section id="slogan" className="slogan">
      <div className="relative p-12 md:px-40 md:pt-32 flex">
        <Image
          className="mx-auto z-10"
          src="/mobile.png"
          alt="mobile"
          width={600}
          height={800}
        />
        <div className="hidden md:block">
          <div className="absolute left-50 top-30 right-0 z-50 uppercase text-[120px] font-extrabold leading-none">
            Train<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute right-22 top-86 z-50 uppercase text-[120px] font-extrabold leading-none">
            Smart<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute left-50 bottom-86 z-50 uppercase text-[120px] font-extrabold leading-none">
            Stay<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute right-22 bottom-30 z-50 uppercase text-[120px] font-extrabold leading-none">
            Strong<span className="text-pulse-orange-50">.</span>
          </div>
        </div>
        <div className="md:hidden">
          <div className="absolute left-5 top-10 z-50 uppercase text-4xl font-extrabold leading-none">
            Train<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute left-5 top-30 z-50 uppercase text-4xl font-extrabold leading-none">
            Smart<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute right-5 bottom-30 z-50 uppercase text-4xl font-extrabold leading-none">
            Stay<span className="text-pulse-orange-50">.</span>
          </div>
          <div className="absolute right-5 bottom-10 z-50 uppercase text-4xl font-extrabold leading-none">
            Strong<span className="text-pulse-orange-50">.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
