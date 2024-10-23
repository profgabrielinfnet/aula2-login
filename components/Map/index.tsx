import { View } from "react-native";
import { Container, Header } from "./styles";


export default function Map({ localization }: any) {
    return (
        <Container>
            <Header>Map: {localization}</Header>
        </Container>
    )
}