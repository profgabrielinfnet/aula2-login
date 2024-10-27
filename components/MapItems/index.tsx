import { FlatList } from "react-native";
import ItemList from "../ItemList";
import { useContext } from "react";
import { MapContext } from "@/context/mapContext";


export default function MapItems() {
    const state = useContext(MapContext);
    const localizations = state.localizations;
    const itemClick = state.itemClick;


    return (
        <FlatList
            data={localizations}
            renderItem={({ item }) => <ItemList item={item} handleItemClick={itemClick} />}
            keyExtractor={item => String(item.id)}
        />
    )
}