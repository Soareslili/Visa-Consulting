import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", visaType: "", message: "" });
  };

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
              Entre em <span className="text-accent">Contato</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Estamos prontos para ajudá-lo a realizar seu sonho de viajar para
              o exterior. Preencha o formulário abaixo ou entre em contato
              através dos nossos canais.
            </p>
          </motion.div>
        </div>
      </section>

    
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
           
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-card"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Solicite uma Consultoria
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Visto Desejado *
                  </label>
                  <Select
                    required
                    value={formData.visaType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, visaType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de visto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="turistico">Visto Turístico</SelectItem>
                      <SelectItem value="estudantil">Visto Estudantil</SelectItem>
                      <SelectItem value="trabalho">Visto de Trabalho</SelectItem>
                      <SelectItem value="residencia">Visto de Residência</SelectItem>
                      <SelectItem value="familiar">Visto Familiar</SelectItem>
                      <SelectItem value="renovacao">Renovação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte-nos mais sobre sua situação e objetivos..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold"
                >
                  <Send className="mr-2" size={18} />
                  Enviar Solicitação
                </Button>
              </form>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nossa equipe está disponível para atendê-lo de segunda a
                  sexta, das 9h às 18h. Respondemos todas as mensagens em até 24
                  horas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">+55 (11) 1234-5678</p>
                    <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground">
                      contato@visaconsulting.com
                    </p>
                    <p className="text-muted-foreground">
                      atendimento@visaconsulting.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Sala 1501
                    </p>
                    <p className="text-muted-foreground">
                      Bela Vista, São Paulo - SP
                    </p>
                    <p className="text-muted-foreground">CEP: 01310-100</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábados: 9h às 13h</p>
                  <p>Domingos e Feriados: Fechado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;