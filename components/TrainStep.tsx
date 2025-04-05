import Image from "next/image";

interface Props {
  page: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const TrainStep = (props: Props) => {
  return (
    <div className="p-6 md:flex rounded-[48px] bg-sandow-gray-90 gap-10 md:gap-32 items-center">
      <div className="md:pl-22 space-y-10 md:space-y-24">
        <div className="w-fit mb-12 md:mb-24 text-3xl text-white p-5 rounded-3xl border border-white">
          {props.icon}
        </div>
        <Image
          className="md:hidden"
          src={props.image}
          alt="step"
          width={600}
          height={600}
        />
        <div className="md:w-sm">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">{props.title}</h3>
          <p className="md:text-xl leading-[1.6]">{props.description}</p>
        </div>
        <span className="font-bold text-sm leanding-none tracking-wide">
          0{props.page}/03
        </span>
      </div>
      <Image
        className="hidden md:block"
        src={props.image}
        alt="step"
        width={600}
        height={600}
      />
    </div>
  );
};

export default TrainStep;
