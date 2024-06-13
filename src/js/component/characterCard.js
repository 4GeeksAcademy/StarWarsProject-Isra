import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="img1" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          sequi voluptatibus labore exercitationem, placeat commodi dolor
          veniam. Fugiat doloribus voluptatum vel iusto mollitia ipsa, explicabo
          animi quis atque aspernatur ratione!
        </p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};
