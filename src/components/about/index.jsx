import React from "react";
import Achievements from "./Achievements";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import cv from "../../../public/assets/img/cv.webp";

import SkillsFront from "./SkillsFront";
import SkillsBack from "./SkillsBack";
import SkillsScalibility from "./SkillsScalibility";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Informações pessoais
                </h3>
              </div>

              <div className="col-12">
                <PersonalInfo />
              </div>

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Baixar CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
        </div>

        <hr className="separator" />

        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              Skills - Linguagens
            </h3>
          </div>
          <SkillsFront />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              Skills - Frontend UI/UX
            </h3>
          </div>
          <SkillsFront />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              Skills - Backend
            </h3>
          </div>
          <SkillsBack />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              Skills - Escalabilidade
            </h3>
          </div>
          <SkillsScalibility />
        </div>

        <hr className="separator mt-1" />

        <div className="row align-items-center justify-content-center">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
              Experiência
            </h3>
          </div>
          <div className="col-lg-8 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
