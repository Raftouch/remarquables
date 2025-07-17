import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { useContext } from "react";
import { TreesContext } from "../context/TreesContext";
import TreeCard from "../components/TreeCard";

export default function MapPage() {
  const { trees } = useContext(TreesContext);

  const position: LatLngExpression = [48.866667, 2.333333];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100vh" }}
        // attributionControl={false}
      >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        /> */}
        {/* <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        /> */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />
        {trees.map((tree) => (
          <Marker
            key={tree.com_idarbre}
            position={[tree.geom_x_y.lat, tree.geom_x_y.lon]}
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
