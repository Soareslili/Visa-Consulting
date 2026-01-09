import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/HeroVisa.png";

import StatsSection from "../components/StatsSection";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
     
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Consultoria Especializada em{" "}
              <span className="text-accent">Vistos e Imigração</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Realize seu sonho de viajar, estudar ou trabalhar no exterior com
              segurança e tranquilidade. Nossa equipe especializada está pronta
              para te ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/contato")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-gold cursor-pointer"
              >
                Iniciar Processo de Visto
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/servicos")}
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground cursor-pointer text-primary-foreground text-accent-foreground hover:bg-accent hover:text-primary font-semibold text-lg px-8 py-6"
              >
                Conhecer Serviços
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

   
      <StatsSection />

     

   
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Pronto para Começar Sua Jornada?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e dê o primeiro passo rumo ao
              seu futuro internacional.
            </p>
            <Button
              onClick={() => navigate("/contato")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-6 cursor-pointer shadow-gold"
            >
              Falar com Especialista
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
