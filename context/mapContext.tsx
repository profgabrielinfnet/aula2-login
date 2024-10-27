import { createContext, useState } from "react";
import { Dimensions } from "react-native";
import { router } from 'expo-router'

export interface ILocalization {
    id: number;
    name: string;
}

export interface IMapContext {
    mapItemSelected: string;
    setMapItemSelected: (value: string) => void;
    localizations: ILocalization[];
    setLocalizations: (value: ILocalization[]) => void;
    itemClick: (item: ILocalization) => void;
    isTablet?: boolean;
}

export const MapContext = createContext<IMapContext>({} as IMapContext);

export const MapContextProvider = ({ children }: any) => {
    const screenWidth = Dimensions.get('window').width;
    const isTablet = screenWidth > 600;
    const [localizations, setLocalizations] = useState<ILocalization[]>([{
        id: 1,
        name: "localizacao 1"
    }, 
    {
        id: 2,
        name: "localizacao 2"
    },
    {
        id: 3,
        name: "localizacao 3"
    }]); 
    const [mapItemSelected, setMapItemSelected] = useState('');
    const itemClick = (item: ILocalization) => {
        setMapItemSelected(item.name);
        if(!isTablet) router.push(`/map?name=${item.name}`);
    }

    return (
        <MapContext.Provider value={{ 
                mapItemSelected, 
                setMapItemSelected, 
                localizations, 
                setLocalizations ,
                itemClick,
                isTablet
            }}>
            {children}
        </MapContext.Provider>
    )
}