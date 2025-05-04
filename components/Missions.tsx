'use client'
import { DownloadIcon } from "lucide-react";

const Missions = () => {
  const DownLoadApp = () => {
    window.location.href = "https://drive.google.com/file/d/1zEHWtBXFvAJ18ng59UK6upsqjO_lX6Xm/view?usp=drive_link";
  };

  return (
    <section id="mission" className="flex px-3 md:px-6 pt-5 md:pt-10">
      <div className="mission w-full md:h-[656px] bg-[#F97316] md:flex justify-between rounded-[40px]">
        <div className="h-[700px] md:h-0"></div>
        <div className="pb-10 md:py-0 px-10 md:w-2/5 flex flex-col justify-center items-start gap-5 md:gap-10">
          <h2 className="w-fit px-4 py-3 border border-white rounded-2xl font-semibold">
            Our Mission
          </h2>
          <p className="text-3xl md:text-5xl leading-[1.25] font-medium">
            Where AI coaching meets gamified{" "}
            <span className="-ml-3 pl-3 pr-8 py-1 bg-background rounded-3xl">
              challenges to
            </span>{" "}
            transform your workouts into an adventure.
          </p>
          <button className="p-5 flex bg-white text-[#111214] font-semibold gap-4 rounded-3xl" onClick={DownLoadApp}>
            Download The App
            <DownloadIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Missions;
