import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">E-mail</span>{" "}
        <a href="mailto:contato.jaimejunior@gmail.com">contato.jaimejunior@gmail.com</a>
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Ligue-me</span>{" "}
        <a href="Tel: +55 79 999648729">+55 (79) 99964-8729</a>
      </p>
    </>
  );
};

export default Address;
