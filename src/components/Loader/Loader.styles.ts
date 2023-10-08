import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { colors } from "../../styles/colors";

export const LoaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primaryActiveElementOpacity};
  border-radius: 18px 18px 0 0;
  backdrop-filter: blur(2px);
  opacity: 0.5;
  z-index: 999;
`;

export const LoaderContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 99em;
  margin: 100px auto;
  z-index: 999;
`;

export const Item = styled(CircularProgress)`
  height: 100%;
  animation-duration: 5s;
  color: ${colors.primaryDefaultDark};
  z-index: 999;
`;
