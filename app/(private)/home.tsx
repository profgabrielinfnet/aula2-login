import {  Dimensions } from 'react-native'
import { Container, Header } from './styles'
import Map from '@/components/Map'
import MapItems from '@/components/MapItems'
import { MapContextProvider } from '@/context/mapContext'
import MapContainer from '@/components/MapContainer'

export default function Home() {
    return (
        <Container>
            <MapContextProvider>
                <Header>Home</Header>
                <MapContainer />
            </MapContextProvider>
        </Container>
    )
}
