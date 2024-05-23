import styled from "styled-components";
import backgroundImage from '../../assets/images/phonebook-background.jpg';

export const LayoutWrap = styled.div`
    /* width: 100%;
    max-width: 375px; */
    height: 100vh;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), 
        url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #dfeff5; 
    position: relative;
    margin: 0 auto;

    @media screen and (min-width: 740px) {
    /* max-width: 740px; */
  }

    @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
  }`