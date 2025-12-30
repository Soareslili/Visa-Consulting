import { useState, useEffect } from "react";
import { NavLink } from "../components/NavLinks";
import { Button } from "../components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Serviços" },
    { to: "/paises", label: "Países" },
    { to: "/blog", label: "Blog" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-foreground">
              Visa<span className="text-accent">Consulting</span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-primary-foreground/90 hover:text-accent transition-smooth"
                activeClassName="text-accent font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold">
              <Phone className="mr-2 h-4 w-4" />
              Fale Conosco
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/90 hover:text-accent transition-smooth py-2"
                activeClassName="text-accent font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold w-full">
              <Phone className="mr-2 h-4 w-4" />
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;