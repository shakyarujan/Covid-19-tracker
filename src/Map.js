import React from "react";
import { Map as LeadfletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeadfletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeadfletMap>
    </div>
  );
}

export default Map;
