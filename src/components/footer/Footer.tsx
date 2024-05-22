import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import LogoFooter from "./LogoFooter.tsx";

function Footer() {
  return (
    <footer className="text-white w-full content-center items-center text-center">
      <div className="bg-primary flex flex-col items-center relative">
        <div className="absolute top-4 right-4 text-right px-14">
          <p className="text-lg font-semibold">Siga-nos nas redes sociais</p>
          <div className="flex justify-center space-x-3 mt-1">
            <a
              href="https://www.instagram.com/greengen_72?igsh=MTdjNDU1Z2hkd2libg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} weight="bold" alt="Instagram" />
            </a>
            <a
              href="https://github.com/GreenGen72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={32} weight="bold" alt="GitHub" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-base flex items-start pl-4 font-semibold">
              Contatos:
            </p>
            <ul>
              <li className="flex items-start pl-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="sm" style={{ marginTop: '6px' }}/>
                e-mail: greengen@greengen.com
              </li>
              <li className="flex items-start pl-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2" size="sm" style={{ marginTop: '6px' }}/>
                telefone: (11) 1234-5678
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full items-start py-4 px-8">
          <LogoFooter />
          <div className="ml-4 mt-4 tracking-widest ">
            <p className="text-lg font-bold text-left">MENU</p>
            <ul className="text-base flex flex-col items-start space-y-1 mt-6 tracking-widest ">
              <li>
                <Link to="/categoria" className="text-white hover:underline">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-white hover:underline">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:underline">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
        </div>

<div className="mt-2 mb-4 flex items-center">
  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" size="sm" />
  <p className="mb-0">Endereço: Rua Green, 72 - Bairro Generation - São Paulo/SP</p>
</div>
      </div>
      <div className="bg-secondary w-full py-0.5">
        <p className="text-base">Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;