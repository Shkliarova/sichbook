import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

export const UserMenuWrap = styled.div`
display: flex;
margin-left: auto;
gap: 4px;

@media screen and (min-width: 740px) {
    gap: 8px;
  }`

export const LogOutSVG = styled(LogoutIcon)`
margin-left: 4px;

@media screen and (min-width: 740px) {
    margin-left: 8px;
  }`

export const LogOutBtn = styled(Button)`
font-size: 14px !important;
margin-left: 8px !important;

@media screen and (min-width: 740px) {
    font-size: 16px !important;
    margin-left: 12px !important;
  }`