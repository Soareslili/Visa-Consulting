import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const countries = [
  {
    name: "Estados Unidos",
    flag: "🇺🇸",
    description: "Visto para turismo, estudo, trabalho e residência nos EUA.",
    slug: "eua",
  },
  {
    name: "Canadá",
    flag: "🇨🇦",
    description: "Processos de imigração e vistos canadenses.",
    slug: "canada",
  },
  {
    name: "Inglaterra",
    flag: "🇬🇧",
    description: "Vistos para o Reino Unido e toda documentação necessária.",
    slug: "inglaterra",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    description: "Visto D7, Golden Visa e outros vistos para Portugal.",
    slug: "portugal",
  },
  {
    name: "Espanha",
    flag: "🇪🇸",
    description: "Vistos de turismo, estudo e residência na Espanha.",
    slug: "espanha",
  },
  {
    name: "França",
    flag: "🇫🇷",
    description: "Processos de visto para a França e Schengen.",
    slug: "franca",
  },
  {
    name: "Austrália",
    flag: "🇦🇺",
    description: "Vistos de trabalho, estudo e residência australiana.",
    slug: "australia",
  },
  {
    name: "Alemanha",
    flag: "🇩🇪",
    description: "Vistos para Alemanha e área Schengen.",
    slug: "alemanha",
  },
];

const Countries = () => {
  const navigate = useNavigate();

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
              Países <span className="text-accent">Atendidos</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Especialistas em vistos para os principais destinos internacionais.
              Selecione um país para conhecer os requisitos específicos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(`/paises/${country.slug}`)}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-smooth cursor-pointer group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                  {country.flag}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-accent transition-smooth">
                  {country.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {country.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Não encontrou seu destino?
            </h2>
            <p className="text-lg text-primary-foreground mb-8">
              Trabalhamos com mais de 50 países ao redor do mundo. Entre em
              contato conosco para saber mais sobre vistos para outros destinos.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Countries;