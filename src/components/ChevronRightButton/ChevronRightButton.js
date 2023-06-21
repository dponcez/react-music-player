import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ChevronRightButton = ({onClick}) => {
  return (
    <>
      <button
        className="static--color next btn btn--medium fa-forward"
        data-next="next"
        title="Next"
        aria-describedby="next button"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </>
  )
}

export { ChevronRightButton }