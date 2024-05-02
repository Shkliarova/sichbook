import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { NotFoundText } from "./NotFound.styled"

export default function NotFound() {
    return (
        <NotFoundText>
            Мабуть, ви заблукали! Будь ласка, перейдіть за цим <Button href="#text-buttons" style={{fontSize: "large"}}>
            <Link to="/">посиланням</Link>
        </Button> щоб перейти на Головну.
        </NotFoundText>
    )
}