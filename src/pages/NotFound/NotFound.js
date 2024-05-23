import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { NotFoundText, StyledSvg } from "./NotFound.styled"
import icons from '../../assets/icons.svg';

export default function NotFound() {
    return (
        <>
        <StyledSvg>
            <use href={`${icons}#page-not-found`} />
        </StyledSvg>
        <NotFoundText>
            Мабуть, ви заблукали! Будь ласка, перейдіть за цим <Button href="#text-buttons" style={{fontSize: "large"}}>
            <Link to="/">посиланням</Link>
        </Button> щоб перейти на Головну.
        </NotFoundText>
        </>
    )
}