import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ChevronLeftButton = ({onClick}) => {
  return (
    <>
      <button
        className="static--color prev btn btn--medium fa-backward"
        data-next="prev"
        title="Previous"
        aria-describedby="previous button"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
    </>
  );
}

export { ChevronLeftButton }