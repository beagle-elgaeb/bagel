import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 170px 24px 0 24px;
`;

export const WarningText = styled.p`
  font-size: 28px;
  line-height: 30px;
  font-weight: 500;
  text-align: center;
  color: ${colors.warning};
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  margin: 40px 0 0 0;
`;

export const Mail = styled.a`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  margin: 40px 0 0 0;
`;
