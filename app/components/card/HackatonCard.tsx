interface HackathonCardProps {
  title: string;
  prize: string;
  bgImage: string;
  numberOfParticipants: string;
}

const HackatonCard = ({ numberOfParticipants, prize, bgImage, title }: HackathonCardProps) => {
  return (
    <div
      className="max-w-[360px] w-full h-[530px] flex items-start space-x-4 p-4 bg-gray-900 rounded-[12px] shadow-lg text-white border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300 px-[10px] pt-[10px] pb-5"
    >
      <img src={bgImage} alt="checker" className="w-full h-[300px]" />
      <h2>{title}</h2>
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          <img src="/buttonIcon.png" alt="button" />
          <p>{prize}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src="/buttonIcon.png" alt="button" />
          <p>{numberOfParticipants}</p>
        </div>
      </div>
    </div>
  );
};

export default HackatonCard;
