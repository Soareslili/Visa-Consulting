import { NavLink } from "../components/NavLinks";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Visa<span className="text-accent">Consulting</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Especialistas em consultoria de vistos e imigração com atendimento
              premium e alto índice de aprovação.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sobre"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/servicos"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Visto Turístico</li>
              <li className="text-primary-foreground/80">Visto Estudantil</li>
              <li className="text-primary-foreground/80">Visto de Trabalho</li>
              <li className="text-primary-foreground/80">Visto de Residência</li>
              <li className="text-primary-foreground/80">Renovação</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-primary-foreground/80">
                  +55 (11) 1234-5678
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-primary-foreground/80">
                  contato@visaconsulting.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <span className="text-primary-foreground/80">
                  Av. Paulista, 1000 - São Paulo, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© 2024 VisaConsulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
