/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import ModalMain from "./modal/ModalMain";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>FREELANCERS</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("freelancers")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <ModalMain modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Portfolio;
