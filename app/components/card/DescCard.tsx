interface DescCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DescCard: React.FC<DescCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-[#684DF4] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-white/80 leading-relaxed">{description}</p>
  </div>
);

export default DescCard
