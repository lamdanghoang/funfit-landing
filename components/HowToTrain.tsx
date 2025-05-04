import { ChartNoAxesColumnIcon, CpuIcon, LightbulbIcon } from "lucide-react";
import TrainStep from "./TrainStep";

const HowToTrain = () => {
  return (
    <section id="howtotrain">
      <div className="px-12 py-10 md:px-32 md:py-20 flex flex-col items-center justify-center gap-8 md:gap-15">
        <h2 className="text-3xl md:text-6xl font-bold">How to Train</h2>

        <div className="grid gap-8 md:gap-15">
          {steps.map((step, index) => (
            <TrainStep
              key={index}
              page={step.page}
              title={step.title}
              description={step.description}
              icon={step.icon}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToTrain;

const steps = [
  {
    page: 1,
    title: "Choose Your Challenge", // Translated from "Chọn Thử Thách"
    description:
      "Answer a few quick questions to let the AI personalize a workout plan suitable for your goals (lose weight, gain muscle, maintain fitness) and physical condition.",
    icon: <CpuIcon />,
    image: "/step-1.png",
  },
  {
    page: 2,
    title: "Train & Conquer", // Translated from "Tập Luyện & Chinh Phục"
    description:
      "Perform exercises with detailed video guidance, receiving real-time feedback from the AI to ensure correct technique and maximum effectiveness.",
    icon: <LightbulbIcon />,
    image: "/step-2.png",
  },
  {
    page: 3,
    title: "Get Rewards & Connect", // Translated from "Nhận Thưởng & Kết Nối"
    description:
      "Each workout session helps you earn rewards, which can be used to unlock premium exercises or for trading. Connect with the community to share achievements and get motivated!",
    icon: <ChartNoAxesColumnIcon />,
    image: "/step-3.png",
  },
];
