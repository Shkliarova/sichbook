import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function NotFound() {
    return (
        <p style={{textAlign: "center", marginTop: "20%", fontSize:"x-large"}}>
            Мабуть, ви заблукали! Будь ласка, перейдіть за цим <Button href="#text-buttons" style={{fontSize: "large"}}>
            <Link to="/">посиланням</Link>
        </Button> щоб перейти на Головну.
        </p>
    )
}