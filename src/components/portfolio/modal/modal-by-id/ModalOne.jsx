/* eslint-disable @next/next/no-img-element */
import React from "react";
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import Image from "next/image";
import PortfolioData from "../../portfolioData";

const ModalOne = ({ modalId, setGetModal }) => {
  return (
    <div className="modal_portfolio ">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Projeto:{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-user-o pr-2"></i>
                        Cliente :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.client}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Stack :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.language}
                        </span>
                      </div>
                      {details.preview && (
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Visualizar :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <figure className="modal__img">
                <img src={item.image} alt="portfolio project demo" />
              </figure>

              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <Image src={CloseImg} alt="portfolio project demo" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalOne;
