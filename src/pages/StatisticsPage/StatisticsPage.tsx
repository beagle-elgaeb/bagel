import { FC, useRef } from "react";
import { colors } from "../../styles/colors";
import Diagram from "./Diagram";
import { useData } from "./hooks/useData";
import * as elements from "./StatisticsPage.styles";

const StatisticsPage: FC = () => {
  const { data, totalCount, dataWrapper } = useData();

  const { CardContainer, DiagramContainer, StatisticsContainer, Legend, Title, Text, Point } =
    elements;

  const titleRef1 = useRef<HTMLParagraphElement>(null);
  const titleRef2 = useRef<HTMLParagraphElement>(null);
  const titleRef3 = useRef<HTMLParagraphElement>(null);

  const titleRefArray = [titleRef3, titleRef2, titleRef1];

  const text = (number: number) =>
    new Intl.NumberFormat().format(number) +
    " (" +
    Math.round((number * 100 * 10) / totalCount) / 10 +
    "%)";

  if (!data) return null;

  const { exploitation, creation, infrastructure } = data;

  return (
    <StatisticsContainer>
      {dataWrapper(
        <CardContainer>
          <DiagramContainer>
            <Diagram titleRefArray={titleRefArray} />
          </DiagramContainer>

          <Legend>
            <Point color={colors.darkBlue} />
            <Title ref={titleRef1}>Эксплуатация</Title>
            <Point color={colors.transparent} />
            <Text>{text(exploitation)}</Text>

            <Point color={colors.lightBlue} />
            <Title ref={titleRef2}>Создание и развитие </Title>
            <Point color={colors.transparent} />
            <Text>{text(creation)}</Text>

            <Point color={colors.orange} />
            <Title ref={titleRef3}>Инфраструктура</Title>
            <Point color={colors.transparent} />
            <Text>{text(infrastructure)}</Text>
          </Legend>
        </CardContainer>
      )}
    </StatisticsContainer>
  );
};

export default StatisticsPage;
