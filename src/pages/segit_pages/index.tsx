import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import '../../styles/segit/style.css'

const Home: React.FC = () => {
  const { t } = useTranslation("segit");

  const navLinks = [
    { label: t("header.features"), path: "#recursos" },
    { label: t("header.benefits"), path: "#beneficios" },
    { label: t("header.testimonials"), path: "#depoimentos" },
  ];

  const testimonials = [
    {
      text: t("testimonials.maria.text"),
      name: t("testimonials.maria.name"),
      role: t("testimonials.maria.role"),
    },
    {
      text: t("testimonials.joao.text"),
      name: t("testimonials.joao.name"),
      role: t("testimonials.joao.role"),
    },
    {
      text: t("testimonials.ana.text"),
      name: t("testimonials.ana.name"),
      role: t("testimonials.ana.role"),
    },
  ];

  const features = [
    {
      icon: "📊",
      title: t("features.enrollment.title"),
      description: t("features.enrollment.description"),
    },
    {
      icon: "📝",
      title: t("features.grades.title"),
      description: t("features.grades.description"),
    },
    {
      icon: "📅",
      title: t("features.classes.title"),
      description: t("features.classes.description"),
    },
    {
      icon: "💰",
      title: t("features.finance.title"),
      description: t("features.finance.description"),
    },
    {
      icon: "📱",
      title: t("features.mobile.title"),
      description: t("features.mobile.description"),
    },
    {
      icon: "📈",
      title: t("features.adaptability.title"),
      description: t("features.adaptability.description"),
    },
  ];

  const benefits = [
    {
      title: t("benefits.productivity.title"),
      description: t("benefits.productivity.description"),
    },
    {
      title: t("benefits.costReduction.title"),
      description: t("benefits.costReduction.description"),
    },
    {
      title: t("benefits.gradeVisualization.title"),
      description: t("benefits.gradeVisualization.description"),
    },
    {
      title: t("benefits.multiPlatform.title"),
      description: t("benefits.multiPlatform.description"),
    },
  ];

  return (
    <>
      <SEO
        title="SEGIT - Sistema de Gestão Escolar"
        description="Sistema de Gestão Escolar completo para otimizar processos acadêmicos e administrativos da sua instituição de ensino."
      />

      <Header
        logoText="SEGIT"
        logoRedirect="#"
        backgroundColor="#fff"
        textColor="#1a1a1a"
        links={navLinks}
        showCTA={true}
        ctaLabel={t("header.contact-us")}
        ctaPath="https://wa.me/258878425198?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20o%20SEGIT."
      />

      <section className="hero" id="inicio">
        <div className="container hero-container">
          <div className="hero-content">
            <h2>{t("hero.title")}</h2>
            <p>{t("hero.desc")}</p>
            <div className="hero-buttons">
              <Link to="#contato" className="btn">
                {t("hero.request-demo")}
              </Link>
              <Link to="https://segit.smartek.co.mz" className="btn test-btn">
                Teste o SEGIT
              </Link>
            </div>
          </div>

          <div className="hero-image floating">
            <img
              src="/assets/img/segit/hero3.png"
              alt="SEGIT - Sistema de Gestão Escolar"
            />
          </div>
        </div>
      </section>

      <section className="features" id="recursos">
  <div className="container">
    <div className="section-title">
      <h3>{t("features.title")}</h3>
      <p>{t("features.description")}</p>
    </div>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>;

<section className="benefits" id="beneficios">
  <div className="container benefits-container">
    <div className="benefits-image">
      <img src="/assets/img/segit/hero2.png" alt={t("benefits.imageAlt")} />
    </div>
    <div className="benefits-content">
      <h3>{t("benefits.title")}</h3>

      {benefits.map((benefit, index) => (
        <div className="benefit-item" key={index}>
          <div className="benefit-icon">✓</div>
          <div className="benefit-text">
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>;

  <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-title">
          <h3>{t("testimonials.title")}</h3>
          <p>{t("testimonials.description")}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="cta" id="contato">
      <div className="container">
        <h3>{t("cta.title")}</h3>
        <p>{t("cta.description")}</p>

        <div className="form-container">
          <form id="demo-form" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t("cta.form.nameLabel")}</label>
              <input type="text" id="name" name="name" placeholder={t("cta.form.namePlaceholder")} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("cta.form.emailLabel")}</label>
              <input type="email" id="email" name="email" placeholder={t("cta.form.emailPlaceholder")} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t("cta.form.phoneLabel")}</label>
              <input type="tel" id="phone" name="phone" placeholder={t("cta.form.phonePlaceholder")} required />
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn">{t("cta.form.submit")}</button>
              <a
                href="https://wa.me/258878425198?text=Olá!%20Tenho%20interesse%20em%20conhecer%20o%20SEGIT."
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="whatsapp-icon">📱</span> {t("cta.form.whatsapp")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h4>SEGIT</h4>
            <ul>
              <li><a href="#inicio">{t("footer.links.start")}</a></li>
              <li><a href="#recursos">{t("footer.links.features")}</a></li>
              <li><a href="#beneficios">{t("footer.links.benefits")}</a></li>
              <li><a href="#depoimentos">{t("footer.links.testimonials")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer.resources.title")}</h4>
            <ul>
              <li><a href="#">{t("footer.resources.enrollment")}</a></li>
              <li><a href="#">{t("footer.resources.grades")}</a></li>
              <li><a href="#">{t("footer.resources.calendar")}</a></li>
              <li><a href="#">{t("footer.resources.finance")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer.support.title")}</h4>
            <ul>
              <li><a href="#">{t("footer.support.helpCenter")}</a></li>
              <li><a href="#">{t("footer.support.tutorials")}</a></li>
              <li><a href="#">{t("footer.support.faq")}</a></li>
              <li><a href="#">{t("footer.support.contact")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer.contact.title")}</h4>
            <ul>
              <li>info@smartek.co.mz</li>
              <li>(+258) 878425198</li>
              <li>{t("footer.contact.address")}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SEGIT - {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
