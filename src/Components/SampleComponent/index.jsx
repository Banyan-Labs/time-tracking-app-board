import React from 'react'
import { Container, CardsWrapper, Card, Text } from './style';

const SampleComponent = () => {
    return (
        <Container>
            <CardsWrapper>
                <Card>
                    <Text fontSize={24}>24</Text>
                </Card>
                <Card>
                    <Text fontSize={42}>42</Text>
                </Card>
            </CardsWrapper>
        </Container>
    )
}

export default SampleComponent
