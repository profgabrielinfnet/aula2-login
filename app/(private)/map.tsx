import Map from "@/components/Map";
import { useLocalSearchParams } from 'expo-router';

export default function MapScreen() {
    const params = useLocalSearchParams()
    return (
        <Map localization={String(params.name)} />
    )
}