import React from "react";

const personalInfoContent = [
  { meta: "Nome", metaInfo: "Júnior Sousa", hasColor: "" },
  { meta: "Idade", metaInfo: "21 anos", hasColor: "" },
  { meta: "Nacionalidade", metaInfo: "Brasil", hasColor: "" },
  { meta: "Telefone", metaInfo: "+55 (79) 99964-8729", hasColor: "" },
  { meta: "Email", metaInfo: "contato.jaimejunior@gmail.com", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
