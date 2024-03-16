import 'leaflet/dist/leaflet.css'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'

interface MapProps {
    latitude: string
    longitude: string
}

const ICON = icon({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
    shadowSize: [32, 40],
    iconSize: [32, 40],
})

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    return (
        <MapContainer
            scrollWheelZoom={false}
            center={[parseFloat(latitude), parseFloat(longitude)]}
            zoom={4}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={ICON} position={[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup>
                    <p className="text-2xl">User Location</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
