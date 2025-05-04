import {
  BotIcon,
  ChartNoAxesColumnIcon,
  CpuIcon,
  MoveRightIcon,
  TrophyIcon,
  UserIcon,
  WaypointsIcon,
} from "lucide-react";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section id="benefit" className="benefit">
      <div className="px-12 py-10 md:px-32 md:py-20 flex flex-col items-center justify-center gap-6 md:gap-12">
        <h2 className="text-4xl md:text-8xl font-bold">Boar Benefits</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
        <button className="px-8 py-5 flex bg-pulse-orange-50 text-white font-semibold gap-4 rounded-3xl">
          Free Trial <MoveRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Benefits;

const benefits = [
  {
    title: "Gamification",
    description:
      "With challenges, badges, and leaderboards creating a healthy competitive environment, motivating users to maintain their workout habits.",
    icon: <BotIcon />,
  },
  {
    title: "AI Technology",
    description:
      "Real-time feedback and video/3D guidance help users perform exercises with correct technique and optimize effectiveness.",
    icon: <CpuIcon />,
  },
  {
    title: "Personalized Experience",
    description:
      "Automated training schedules and diverse exercises tailored to each user's goals and fitness level, providing an optimal experience.",
    icon: <UserIcon />,
  },
  {
    title: "Community Connection",
    description:
      "Sharing achievements and creating groups helps users build relationships and motivate each other to overcome workout challenges together.",
    icon: <WaypointsIcon />,
  },
  {
    title: "Workout and Earn",
    description:
      "Turn your effort into real value! – Complete challenges and receive rewards through our Blockchain application.",
    icon: <TrophyIcon />,
  },
  {
    title: "Performance Tracking",
    description:
      "Sync data from wearable devices to accurately track health metrics, allowing for evaluation and adjustment of the program.",
    icon: <ChartNoAxesColumnIcon />,
  },
];
