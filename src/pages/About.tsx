import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutTeam from "../assets/aboutTeam.png";

const timelineSteps = [
  {
    title: "Avaliação do Perfil",
    description: "Análise completa do seu perfil e objetivos para definir a melhor estratégia.",
  },
  {
    title: "Coleta de Documentos",
    description: "Orientação detalhada sobre toda a documentação necessária para o processo.",
  },
  {
    title: "Preenchimento de Formulários",
    description: "Preenchimento preciso e completo de todos os formulários requeridos.",
  },
  {
    title: "Preparação para Entrevista",
    description: "Treinamento completo para garantir sucesso na entrevista consular.",
  },
  {
    title: "Acompanhamento",
    description: "Acompanhamento em todas as etapas até a conclusão do processo.",
  },
  {
    title: "Aprovação do Visto",
    description: "Comemoração da aprovação e orientações finais para sua viagem.",
  },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Sobre a <span className="text-accent">VisaConsulting</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Somos especialistas em consultoria de vistos e imigração,
              ajudando pessoas a realizarem seus sonhos há mais de 15 anos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutTeam}
                alt="Equipe VisaConsulting"
                className="rounded-lg shadow-elegant w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Quem <span className="text-accent">Somos</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A VisaConsulting é uma empresa especializada em consultoria de
                vistos e processos de imigração. Com mais de 15 anos de
                experiência no mercado, já ajudamos mais de 5.000 clientes a
                conquistarem seus vistos para diversos países ao redor do mundo.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe é formada por consultores altamente qualificados e
                experientes, que oferecem um atendimento personalizado e humanizado,
                garantindo que cada cliente tenha todo o suporte necessário durante
                o processo.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Nossa Missão
                    </h3>
                    <p className="text-muted-foreground">
                      Facilitar o processo de obtenção de vistos com excelência,
                      profissionalismo e transparência.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Nossa Visão
                    </h3>
                    <p className="text-muted-foreground">
                      Ser referência nacional em consultoria de vistos, reconhecida
                      pela qualidade e comprometimento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Nossos Valores
                    </h3>
                    <p className="text-muted-foreground">
                      Ética, transparência, comprometimento, excelência e foco no
                      cliente.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nosso <span className="text-accent">Processo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acompanhamento completo em todas as etapas para garantir o sucesso
              do seu visto.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent -translate-x-[9px] shadow-gold"></div>
                <div className="bg-card p-6 rounded-lg shadow-card ml-4 hover:shadow-elegant transition-smooth">
                  <div className="flex items-center mb-2">
                    <span className="text-accent font-bold text-lg mr-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;