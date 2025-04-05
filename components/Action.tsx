import { DownloadIcon } from "lucide-react";

const Action = () => {
  return (
    <section id="action" className="flex px-3 pb-6 md:p-6">
      <div className="mission w-full md:h-[656px] bg-[#F97316] md:flex justify-between rounded-[40px]">
        <div className="h-[700px] md:h-0"></div>
        <div className="pb-10 md:py-0 md:mr-10 px-10 md:w-1/3 flex flex-col justify-center items-start gap-5 md:gap-10">
          <h2 className="font-bold text-3xl md:text-5xl">
            Get Started Now, For Free!
          </h2>
          <p className="text-xl leading-[1.6] font-normal">
            Transform your workouts, challenge your limits, and achieve your
            fitness goals – Download Funfit today!
          </p>
          <button className="flex text-lg font-semibold gap-4 items-center">
            Download App
            <span className="p-5 bg-sandow-gray-100 rounded-3xl">
              <DownloadIcon />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Action;
