import { Container } from "./styles"

import { FiStar } from 'react-icons/fi'

export function Stars({size}) {
    return (
        <Container>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
        </Container>
    )
}