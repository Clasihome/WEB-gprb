import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default ({ lat, lng, height, zoom })=> {
  

  if (typeof window !== 'undefined') {
    return(
      <MapContainer
        center={{ lat, lng }}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height }}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}/>
    </MapContainer>
    );
  }
  return <span>a</span>;
}