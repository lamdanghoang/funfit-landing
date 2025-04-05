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
        <h2 className="text-4xl md:text-8xl font-bold">Funfit Benefits</h2>

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
      "Với các thử thách, huy hiệu và bảng xếp hạng tạo nên môi trường cạnh tranh lành mạnh, thúc đẩy người dùng duy trì thói quen tập luyện.",
    icon: <BotIcon />,
  },
  {
    title: "Công nghệ AI",
    description:
      "Phản hồi thời gian thực và hướng dẫn bằng video/3D, giúp người dùng thực hiện bài tập đúng kỹ thuật và tối ưu hiệu quả.",
    icon: <CpuIcon />,
  },
  {
    title: "Trải Nghiệm Cá Nhân Hóa",
    description:
      "Lịch tập tự động và bài tập đa dạng được thiết kế riêng theo mục tiêu và thể trạng của từng người, mang lại trải nghiệm tối ưu.",
    icon: <UserIcon />,
  },
  {
    title: "Kết Nối Cộng Đồng",
    description:
      "Chia sẻ thành tích và tạo nhóm giúp các gymer xây dựng mối quan hệ, tạo động lực cùng vượt qua thử thách tập luyện.",
    icon: <WaypointsIcon />,
  },
  {
    title: "Workout and Earn",
    description:
      "Biến nỗ lực của bạn thành giá trị thực! – Thực hiện challenges và nhận phần thưởng qua ứng dụng Blockchain của chúng tôi.",
    icon: <TrophyIcon />,
  },
  {
    title: "Theo Dõi Hiệu Quả",
    description:
      "Đồng bộ dữ liệu từ các thiết bị wearables giúp theo dõi chính xác các chỉ số sức khỏe, từ đó đánh giá và điều chỉnh chương trình.",
    icon: <ChartNoAxesColumnIcon />,
  },
];
