import styled from "styled-components"
import { CircularProgress } from "@mui/material"

export const AppWrapper = styled.div`
display: flex;
gap: 8px;
flex-direction: column;
border: 1px solid #1976d2;
box-shadow: 5px 5px 10px #1976d2;
padding: 15px;
width: 700px;
margin: 5% auto;
background-color: white;`

export const MainTitle = styled.h1`
margin-bottom: 8px;`

export const MainTitleWrap = styled.div`
display: flex;
gap: 12px;
align-items: center;`

export const ContactTitle = styled.div`
display: flex;
gap: 12px;
align-items: center;
margin-top: 12px;`

export const ContactLoader = styled(CircularProgress)`
display: block;
margin: 0 auto;`