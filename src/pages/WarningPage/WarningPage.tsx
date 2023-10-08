import { FC } from "react";
import { Container, Description, Mail, WarningText } from "./WarningPage.styles";

const WarningPage: FC<PropsType> = (props) => {
  const { code } = props;

  const href = `mailto:i@evg-ni.ru?subject="Ошибка ${code}"`;

  return (
    <Container>
      <WarningText>Код ошибки {code}</WarningText>
      <Description>Сообщите этот код администратору системы</Description>
      <Mail href={href}>i@evg-ni.ru</Mail>
    </Container>
  );
};

export default WarningPage;

type PropsType = {
  code: string;
};
