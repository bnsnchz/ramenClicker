
import React from "react";


const Image = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.handleClickEvent(props.id)} src={props.image} alt={props.alt}/>
    </div>
  </div>
);

export default Image;