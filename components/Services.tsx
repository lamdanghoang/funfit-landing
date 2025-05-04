import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <section id="service" className="flex px-3 md:px-6">
      <div className="py-12 md:py-24 w-full bg-pulse-orange-50 flex flex-col rounded-[40px] gap-16">
        <div className="scroll-container flex flex-col gap-4">
          <div className="scroll-content-1">
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              AI Fitness
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Personalized Workout
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Nutrition Guidance
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Dumbbell
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Fitness Analytics
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Wellness Coaching
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              AI Fitness
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Personalized Workout
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Nutrition Guidance
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Dumbbell
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Fitness Analytics
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Wellness Coaching
            </span>
          </div>
          <div className="scroll-content-2">
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Smart Health
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Virtual AI Coach
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              AI Fitness Chatbot
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Activity Tracking
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Goal Setting
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Activity Tracking
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Smart Health
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Virtual AI Coach
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              AI Fitness Chatbot
            </span>
          </div>
          <div className="scroll-content-3">
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Holistic Wellness
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Fitness Progress
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Smart Exercise
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Lifestyle Optimization
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Smart Fitness
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Dumbbell
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Holistic Wellness
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Fitness Progress
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Smart Exercise
            </span>
            <span className="w-fit px-16 py-8 bg-pulse-orange-60 rounded-4xl font-semibold text-2xl">
              Lifestyle Optimization
            </span>
          </div>
        </div>
        <div className="px-10 md:px-26 md:flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/funfit-logo-white.png"
              alt="funfit logo"
              width={40}
              height={46}
            />
            <h3 className="text-3xl md:text-6xl font-bold">
              Our Core Services
            </h3>
          </div>
          <div className="md:w-md md:ml-48 flex flex-col gap-6">
            <p className="mt-4 md:mt-0 text-lg md:text-xl leading-[1.6]">
              Boar provides fitness workout plans and nutritional goals with AI-based personalized features
            </p>
            <button className="w-fit px-8 py-5 flex bg-sandow-gray-100 text-white font-semibold gap-4 rounded-3xl">
              Free Trial <MoveRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
