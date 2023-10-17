import React from "react";
import ModalOne from "./modal-by-id/ModalOne";

const ModalMain = ({ modalId, setGetModal }) => {
    return (
      <ModalOne modalId={modalId} setGetModal={setGetModal} />
    );
};

export default ModalMain;
