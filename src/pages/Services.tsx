import { motion } from "framer-motion";
import { Plane, GraduationCap, Briefcase, Users, Home, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Plane,
    title: "Visto Turístico",
    description:
      "Planejamento completo para viagens de turismo com assessoria documental especializada.",
    features: [
      "Análise de perfil do viajante",
      "Orientação sobre documentação",
      "Preenchimento de formulários",
      "Preparação para entrevista",
      "Acompanhamento do processo",
    ],
  },
  {
    icon: GraduationCap,
    title: "Visto Estudantil",
    description:
      "Auxílio completo para estudantes que desejam realizar cursos no exterior.",
    features: [
      "Escolha da instituição de ensino",
      "Documentação acadêmica",
      "Carta de aceitação",
      "Comprovação financeira",
      "Seguro saúde internacional",
    ],
  },
  {
    icon: Briefcase,
    title: "Visto de Trabalho",
    description:
      "Consultoria especializada para profissionais buscando oportunidades internacionais.",
    features: [
      "Análise de elegibilidade",
      "Documentação profissional",
      "Carta convite da empresa",
      "Certificações necessárias",
      "Orientação sobre contratos",
    ],
  },
  {
    icon: Users,
    title: "Visto Familiar",
    description:
      "Reunião familiar facilitada com todo suporte necessário.",
    features: [
      "Comprovação de vínculo familiar",
      "Documentação de parentesco",
      "Análise de elegibilidade",
      "Processo de petição",
      "Acompanhamento completo",
    ],
  },
  {
    icon: Home,
    title: "Visto de Residência",
    description:
      "Processo completo para estabelecer residência permanente.",
    features: [
      "Análise de requisitos",
      "Documentação completa",
      "Processo de aplicação",
      "Entrevistas consulares",
      "Suporte pós-aprovação",
    ],
  },
  {
    icon: RefreshCw,
    title: "Renovação de Vistos",
    description:
      "Serviço ágil de renovação para manter sua documentação em dia.",
    features: [
      "Análise de situação atual",
      "Documentação atualizada",
      "Processo simplificado",
      "Acompanhamento rápido",
      "Suporte contínuo",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
    
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Nossos <span className="text-accent">Serviços</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Oferecemos consultoria completa para todos os tipos de vistos,
              com atendimento personalizado e alto índice de aprovação.
            </p>
          </motion.div>
        </div>
      </section>

 
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        className="text-accent flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Precisa de Ajuda com Seu Visto?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudá-lo em todas as etapas do
              processo. Entre em contato conosco hoje mesmo.
            </p>
            <Button
              onClick={() => navigate("/contato")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-6 shadow-gold cursor-pointer"
            >
              Solicitar Consultoria
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
