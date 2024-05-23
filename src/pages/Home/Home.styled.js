import styled from "styled-components"

export const HomeWrap = styled.div`
text-align: center;
margin: 200px auto;
width: calc(100% - 30px);

@media screen and (min-width: 740px) {
    margin: 250px auto;
  }`

export const HomeTitle = styled.h1`
font-size: 32px;

@media screen and (min-width: 740px) {
    font-size: 42px;
  }`

export const HomeText = styled.p`
font-size: 22px;
margin: 0 auto;
margin-top: 12px;
max-width: 1000px;

@media screen and (min-width: 740px) {
    font-size: 28px;
  }`