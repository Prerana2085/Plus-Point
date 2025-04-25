import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 15);
  }, [lat, lng, map]);
  return null;
};

const MapView = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Unable to access location. Please allow location access.");
      }
    );
  }, []);

  if (!position) {
    return (
      <div style={styles.loaderContainer}>
        <h2 style={styles.loaderText}>📍 Fetching your location...</h2>
      </div>
    );
  }

  return (
    <div style={styles.mapWrapper}>
      <MapContainer center={position} zoom={13} style={styles.mapContainer}>
        <RecenterMap lat={position[0]} lng={position[1]} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            You're here. <br />
            <a
              href={`https://www.google.com/maps/search/hospitals/@${position[0]},${position[1]},15z`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.popupLink}
            >
              🏥 View Nearby Hospitals
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// 👇 Styling object for cleaner layout and fullscreen
const styles = {
  mapWrapper: {
    height: '100vh',
    width: '100vw',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  popupLink: {
    color: '#007bff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  loaderContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  loaderText: {
    fontSize: '1.5rem',
    color: '#333',
  },
};

export default MapView;
