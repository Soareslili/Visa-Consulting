import { motion } from "framer-motion";
import { Users, Award, Globe, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Atendidos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Globe, value: "50+", label: "Países Atendidos" },
  { icon: CheckCircle2, value: "98%", label: "Taxa de Aprovação" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <stat.icon className="text-accent" size={32} />
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;