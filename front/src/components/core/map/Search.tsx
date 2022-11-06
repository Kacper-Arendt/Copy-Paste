import { useEffect } from "react";

import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

export const Search = () => {
  const map = useMap();

  useEffect(() => {
    const searchControl = GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: "bar",
      notFoundMessage: "Sorry, that address could not be found.",
    });

    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
};
