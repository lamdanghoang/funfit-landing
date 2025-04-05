interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = (props: Props) => {
  return (
    <div className="p-6 rounded-[40px] bg-sandow-gray-90 hover:shadow-lg transition-all border border-transparent hover:border-pulse-orange-50 hover:bg-sandow-gray-80 group">
      <div className="w-fit mb-8 md:mb-16 text-3xl text-white p-5 bg-sandow-gray-80 group-hover:bg-sandow-gray-70 rounded-3xl">
        {props.icon}
      </div>
      <div className="w-full">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{props.title}</h3>
        <p className="md:text-lg leading-[1.6]">{props.description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
