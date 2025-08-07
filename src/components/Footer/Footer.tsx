import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Footer.css';
import { Link } from 'react-router';
import styled from 'styled-components';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: faInstagram,
      href: 'https://instagram.com/alskin',
      label: 'Instagram'
    },
    {
      icon: faFacebook,
      href: 'https://facebook.com/alskin',
      label: 'Facebook'
    },
    {
      icon: faYoutube,
      href: 'https://youtube.com/alskin',
      label: 'YouTube'
    },
    {
      icon: faPinterest,
      href: 'https://pinterest.com/alskin',
      label: 'Pinterest'
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/alskin',
      label: 'Twitter'
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/company/alskin',
      label: 'LinkedIn'
    },
    {
      icon: faGlobe,
      href: 'https://alskin.com.br',
      label: 'Website'
    }
  ];

  const footerSections: FooterSection[] = [
    {
      title: 'Sobre a AL SKIN',
      links: [
        { label: '- quem somos', href: '/about' },
        { label: '- time AL SKIN', href: '/about' },
        { label: '- carreiras', href: '/about' }
      ]
    },
    {
      title: 'Loja AL SKIN',
      links: [
        { label: '- lojas físicas', href: '/lojas' },
        { label: '- devolução', href: '/devolucao' }
      ]
    },
    {
      title: 'Atendimento',
      links: [
        { label: '- oi@alskin.com.br', href: 'mailto:oi@alskin.com.br' },
        { label: '- ajuda', href: '/ajuda' }
      ]
    },
    {
      title: 'Blog AL SKIN',
      links: [
        { label: '- Minha pele', href: '/blog/minha-pele' },
        { label: '- Ingredientes', href: '/blog/ingredientes' }
      ]
    }
  ];

  const handleSocialClick = (socialLink: SocialLink) => {
    console.log(`Abrindo ${socialLink.label}: ${socialLink.href}`);
  };

  return (
    <StyledFooter>
      <FooterSocial>
        <FooterContainer>
          <SocialIcons>
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.label}
                onClick={() => handleSocialClick(social)}
                aria-label={`Abrir ${social.label}`}
                type="button"
              >
                <FontAwesomeIcon icon={social.icon} />
              </SocialIcon>
            ))}
          </SocialIcons>
        </FooterContainer>
      </FooterSocial>
      <FooterLinks>
        <FooterContainer>
          <FooterSections>
            {footerSections.map((section, index) => (
              <FooterSection key={section.title}>
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-section-links">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink to={link.href} key={link.label}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterSection>
            ))}
          </FooterSections>
        </FooterContainer>
      </FooterLinks>
      <FooterBottom>
        <FooterContainer>
          <div className="footer-brand">
            <h2 className="footer-brand-name">AL SKIN</h2>
            <FooterCopyright>
              2025 AL SKIN. Todos os direitos reservados.
            </FooterCopyright>
            <FooterAddress>
              Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05240-010
            </FooterAddress>
          </div>
        </FooterContainer>
      </FooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.background.light};
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md}  ${props => props.theme.spacing.xl};
  border: none;

  & h2 {
    font-size: ${props => props.theme.fontSize['2xl']};
    font-weight: 700;
    margin: 0 0 12px 0;
    color: white;
  }
`;

const FooterSocial = styled.div`
  background-color: ${props => props.theme.colors.background.light};
  padding: 40px 0;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const SocialIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: #6c757d;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  font-size: ${props => props.theme.fontSize.xl};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.primary};

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
  }
`;

const FooterLinks = styled.div`
  background-color: ${props => props.theme.colors.background.light};
  border: none;
  width: 100%;  
`;

const FooterSections = styled.div`
  display: grid;
  grid-template-columns: [sobre] auto [loja] auto [atendimento] auto [blog] auto;
  grid-template-rows: [row-1] 100%;
  gap: 80px;
`;

const FooterSection = styled.div`
  text-align: left;
  grid-column: auto / auto;
  grid-row: auto / auto;


  & h3 {
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 20px;
  margin-top: 0;
  text-decoration: underline;
  }

  & ul {
  list-style: none;
  padding: 0;
  margin: 0;

  }

  & ul li {
    margin-bottom: 12px;
  }
`;

const FooterLink = styled(Link)`
  background: none;
  border: none;
  color: #6c757d;
  font-size: ${props => props.theme.fontSize.sm};
  cursor: pointer;
  transition: color ${props => props.theme.transitions.normal};
  text-align: left;
  padding: 0;
  font-family: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const FooterBottom = styled.div`
  background-color: ${props => props.theme.colors.text.primary};
  color: white;
  padding: 30px 0;
  text-align: center;
  width: 100%;

  & h2 {
    font-size: ${props => props.theme.fontSize['2xl']};
    font-weight: 700;
    margin: 0 0 12px 0;
    color: white;
  }
`;

const FooterCopyright = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  margin: 0 0 8px 0;
  color: #adb5bd;
`;

const FooterAddress = styled.p`
  font-size: 12px;
  margin: 0;
  color: #6c757d;
`;

export default Footer;