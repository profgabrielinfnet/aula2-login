import {  FlatList } from 'react-native'
import { Container, Header } from './styles'
import ItemList from '@/components/ItemList'
import { router } from 'expo-router'

export default function Home() {
    const localizations = [{
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
    }]

    const itemClick = (item: any) => {
        // redirect pra map
        router.push(`/map?name=${item.name}`)
    }

    return (
        <Container>
            <Header>Home</Header>
            <FlatList
                data={localizations}
                renderItem={({ item }) => <ItemList item={item} handleItemClick={itemClick} />}
                keyExtractor={item => String(item.id)}
            />
        </Container>
    )
}
