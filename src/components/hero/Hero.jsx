import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "https://i.imgur.com/5UMiR5o.jpg",
  heroMobileImage: "https://i.imgur.com/5UMiR5o.jpg",
  heroTitleName: "Júnior Sousa",
  heroDesignation: "Fullstack Software Engineer",
  heroDescriptions: `Eu sou Júnior Sousa, especialista em desenvolvimento de software web e mobile, com mais de 2 anos de experiência, sou apaixonado por criar soluções que melhoram a vida das pessoas através da tecnologia.`,
  heroBtn: "Mais sobre mim",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        {/* <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
          }}
        ></div> */}
        <div className="col-12 col-lg-5 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            {/* <div
              style={{
                backgroundImage: `url(${heroContent.heroMobileImage})`,
                backgroundSize: "cover",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
              }}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
            /> */}
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  SOBRE <span>MIM</span>
                </h1>
                <span className="title-bg">Resumo</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
