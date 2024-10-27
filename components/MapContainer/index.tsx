import MapItems from "../MapItems";
import Map from "../Map";
import { MapContext } from "@/context/mapContext";
import { useContext } from "react";
import { Container } from "./style";

export default function MapContainer() {
    const state = useContext(MapContext);
    const localization = state.mapItemSelected;
    const isTablet = state.isTablet;
    return (
        <Container>
            <MapItems />
            {
                isTablet && (
                    <Map localization={localization} />
                )
            }
        </Container>
    )
}