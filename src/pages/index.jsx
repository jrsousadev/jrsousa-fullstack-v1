import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
/* import Blog from "../components/blog/Blog"; */
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "Sobre" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contato" },
/*   { icon: "fa-comments", menuName: "Blog" }, */
];

const Home = () => {
  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);
  return (
    <Wrapper>
      <SEO pageTitle={"Junior Sousa"} />

      <div className="yellow">
        <SwitchDark />
        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          <div className="tab-panel_list">
            <TabPanel className="home">
              <div
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </TabPanel>
            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                    SOBRE <span>MIM</span>
                  </h1>
                  <span className="title-bg">Resumo</span>
                </div>
                <AboutMain />
              </div>
            </TabPanel>
            <TabPanel className="portfolio professional">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  Meu <span>Portfólio</span>
                </h1>
                <span className="title-bg">Trabalhos</span>
              </div>

              <Portfolio />
            </TabPanel>
            <TabPanel className="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  entre em <span>contato</span>
                </h1>
                <span className="title-bg">contato</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      Não seja timido(a)!
                    </h3>
                    <p className="open-sans-font mb-4">
                      Sinta-se à vontade para entrar em contato comigo. Estou
                      sempre aberto a discutir novos projetos, ideias criativas
                      ou oportunidades para fazer parte de suas visões.
                    </p>
                    <Address />
                    <Social />
                  </div>
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                </div>
              </div>
            </TabPanel>
           {/*  <TabPanel className="blog">
              <div
                className="title-section text-start text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>blog</span>
                </h1>
                <span className="title-bg">posts</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row pb-50">
                  <Blog />
                </div>
              </div>
            </TabPanel> */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default Home;
