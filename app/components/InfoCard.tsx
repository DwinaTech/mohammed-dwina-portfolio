import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  subtitle: string;
  period?: string;
  description: string;
}

const InfoCard = ({ title, subtitle, period, description }: InfoCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-transform duration-300 hover:scale-[1.02]"
      //   initial={{ opacity: 0, y: 30 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true, amount: 0.2 }}
      //   transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-teal-600 font-medium">{subtitle}</p>
      {period && <p className="text-sm text-gray-500 mb-3">{period}</p>}
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default InfoCard;
