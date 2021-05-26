import "../styles/TripCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";

TripCard.protoTypes = {
  index: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function TripCard({ index, text, onClick, src, alt, path }) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="randomImages">
      <Link to={path}>
        <img src={src} alt={alt} className="randomImages__image" />
        <div className="randomImages__info">
          <p className="randomImages__destination" key={index}>
            {text}
          </p>
        </div>
      </Link>
      <RiDeleteBin2Line
        className="randomImages__delete"
        onClick={handleModal}
      />
      {showModal ? (
        <Modal onClick={onClick} onCancel={() => setShowModal(false)} />
      ) : null}
    </div>
  );
}
export default TripCard;
