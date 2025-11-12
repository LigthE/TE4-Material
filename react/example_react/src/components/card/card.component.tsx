import React from "react";
import "./card.styles.css";
type CardComponentProps = {
  title: string;
  description: string;
  imgUrl: string;
};

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <div className="card">
      <h2 className="card-header">{props.title}</h2>
      <p className="card-body">
        {props.description}
        MiguelllllHEUsedMEee!!! MiguelllllHEUsedMEee!!! MiguelllllHEUsedMEee!!!
        MiguelllllHEUsedMEee!!!
      </p>
      <img src={props.imgUrl} alt={props.title}></img>
    </div>
  );
};

export default CardComponent;
