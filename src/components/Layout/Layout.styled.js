import styled from "styled-components";
import backgroundImage from '../../assets/images/phonebook-background.jpg';

export const LayoutWrap = styled.div`
  padding: 0 0 50px 0;
  box-sizing: border-box;

    min-height: 100vh;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), 
        url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    background-color: #dfeff5;
    margin: 0 auto;
`