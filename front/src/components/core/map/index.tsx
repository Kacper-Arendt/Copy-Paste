import styled from "styled-components";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// COMPONENTS
import { Search } from "./Search";

export interface MapInterface {
  position?: LatLngExpression;
  withSearch?: boolean;
}

const StyledMapContainer = styled(MapContainer)`
	height: 100%;
	width: 100%;
`;

export const Map = (
  { position = [52.23, 21.01], withSearch = true }: MapInterface,
) => (
  <StyledMapContainer center={position} zoom={13} scrollWheelZoom>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {withSearch && <Search />}
  </StyledMapContainer>
);
