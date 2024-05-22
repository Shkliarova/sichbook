import styled from "styled-components"
import { CircularProgress } from "@mui/material"

export const AppWrapper = styled.div`
display: flex;
gap: 4px;
flex-direction: column;
border: 1px solid #1976d2;
box-shadow: 5px 5px 10px #1976d2;
padding: 15px;
width: calc(100% - 60px);
background-color: white;
/* position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%); */
margin: 50px auto;

@media screen and (min-width: 375px) {
  max-width: 500px;
  }

@media screen and (min-width: 740px) {
  max-width: 700px;
  gap: 8px;
  margin: 100px auto;
  }
`

export const MainTitle = styled.h1`
margin-bottom: 4px;
font-size: 22px;

@media screen and (min-width: 740px) {
    margin-bottom: 8px;
    font-size: 32px;
  }`

export const MainTitleWrap = styled.div`
display: flex;
gap: 8px;
align-items: center;

@media screen and (min-width: 740px) {
    gap: 12px;
  }`

export const ContactTitle = styled.div`
display: flex;
gap: 12px;
align-items: center;
margin-top: 12px;`

export const ContactLoader = styled(CircularProgress)`
display: block;
margin: 0 auto;`