import styled from "@emotion/styled";
import { colors, shadow } from "../../styles/colors";

export const StatisticsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 850px;
  border-radius: 24px;
  display: flex;
  box-shadow: ${shadow};
  padding: 40px 46px 50px 46px;
`;

export const Legend = styled.div`
  width: 850px;
  display: grid;
  grid-template-columns: 18px 1fr;
  grid-template-rows: repeat(3, 34px 30px);
  align-items: center;
  gap: 22px 12px;
  margin: 20px 28px 0;
`;

export const Point = styled.div<{ color: string }>`
  width: 17px;
  height: 17px;
  background: ${({ color }) => color};
  border-radius: 99em;
`;

export const Title = styled.p`
  font-size: 34px;
  line-height: 1em;
  font-weight: 500;
  margin: 0;
`;
export const Text = styled.p`
  font-size: 30px;
  line-height: 1em;
  font-weight: 400;
  margin: 0;
`;

export const DiagramContainer = styled.div`
  width: 328px;
  height: 328px;
`;
