import styled from "styled-components"
import { CircularProgress } from "@mui/material"

export const AppWrapper = styled.div`
display: flex;
gap: 4px;
flex-direction: column;
border: 1px solid #1976d2;
box-shadow: 12px 12px 20px -3px rgba(25,118,210,0.64);
padding: 15px;
width: calc(100% - 60px);
background-color: white;
margin: 50px auto;

@media screen and (min-width: 375px) {
  max-width: 500px;
  }

@media screen and (min-width: 740px) {
  max-width: 800px;
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