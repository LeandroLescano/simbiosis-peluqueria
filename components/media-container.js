import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function MediaContainer(props) {
  const [icon, setIcon] = useState(faInstagramSquare);

  useEffect(() => {
    if (props.icon === "twitter") {
      setIcon(faTwitterSquare);
    } else if (props.icon === "facebook") {
      setIcon(faFacebookSquare);
    } else {
      setIcon(faInstagramSquare);
    }
  }, []);

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="media-container">
        <FontAwesomeIcon icon={icon} />
      </div>
    </a>
  );
}

export default MediaContainer;
