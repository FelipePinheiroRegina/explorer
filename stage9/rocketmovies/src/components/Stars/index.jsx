import { Container, StarWrapper } from "./styles"

import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export function Stars({size, rating, totalStars = 5}) {
    return (
        <Container>
            {[...Array(totalStars)].map((_, index) => (
                <StarWrapper key={index} size={size}>
                    {index < rating ? (
                        <IoStarSharp size={size} />
                    ) : (
                        <IoStarOutline size={size} />
                    )}
                </StarWrapper>
            ))}
        </Container>
    )
}