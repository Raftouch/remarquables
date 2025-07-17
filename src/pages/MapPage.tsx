import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { useContext } from "react";
import { TreesContext } from "../context/TreesContext";
import TreeCard from "../components/TreeCard";

export default function MapPage() {
  const { trees } = useContext(TreesContext);

  const treeIcon = L.divIcon({
    html: `<div style="font-size: 24px;">🌳</div>`,
    className: "custom-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const position: LatLngExpression = [48.866667, 2.333333];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />
        {trees.map((tree) => (
          <Marker
            key={tree.com_idarbre}
            position={[tree.geom_x_y.lat, tree.geom_x_y.lon]}
            icon={treeIcon}
          >
            <Popup>
              <TreeCard tree={tree} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
