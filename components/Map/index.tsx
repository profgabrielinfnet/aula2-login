import { Container, Header } from "./styles";

export default function Map({ localization }: { localization: string }) {
    return (
        <Container>
            <Header>Map: {localization}</Header>
        </Container>
    )
}