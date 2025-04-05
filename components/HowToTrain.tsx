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
    title: "Chọn Thử Thách",
    description:
      "Trả lời một vài câu hỏi nhanh để AI cá nhân hóa kế hoạch tập luyện phù hợp với mục tiêu (giảm cân, tăng cơ, duy trì thể lực) và thể trạng của bạn.",
    icon: <CpuIcon />,
    image: "/step-1.png",
  },
  {
    page: 2,
    title: "Tập Luyện & Chinh Phục",
    description:
      "Thực hiện bài tập với hướng dẫn chi tiết bằng video, nhận phản hồi thời gian thực từ AI để đảm bảo kỹ thuật đúng và hiệu quả tối đa.",
    icon: <LightbulbIcon />,
    image: "/step-2.png",
  },
  {
    page: 3,
    title: "Nhận Thưởng & Kết Nối",
    description:
      "Mỗi buổi tập giúp bạn kiếm phần thưởng, có thể dùng để mở khóa bài tập cao cấp, hoặc giao dịch. Kết nối với cộng đồng để chia sẻ thành tích và nhận động lực!",
    icon: <ChartNoAxesColumnIcon />,
    image: "/step-3.png",
  },
];
