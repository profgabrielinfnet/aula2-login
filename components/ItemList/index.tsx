import { Text, TouchableOpacity } from "react-native";

export default function ItemList({ item, handleItemClick }: any) {
    return (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}