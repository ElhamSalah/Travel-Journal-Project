/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
import React from "react";
import mapPin from "/map-pin.svg";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img className="location-img" src={props.imageUrl} alt=" Images " />
        </div>
        <div className="card-info">
          <div className="location">
            <img src={mapPin} alt="" />
           
            <p className="country">{props.country.toUpperCase()}</p>
       
            <a target="_blank" className="mapsUrl" href={props.mapsUrl} rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <p className="dates">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}
