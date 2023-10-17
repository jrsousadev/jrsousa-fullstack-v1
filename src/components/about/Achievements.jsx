import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "anos de", subTitle2: "experiência" },
  { title: "20", subTitle1: "Freelancers", subTitle2: "entregues" },
  { title: "10", subTitle1: "Clientes", subTitle2: "satisfeitos" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase" style={{fontSize: '0.85rem'}}>
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
