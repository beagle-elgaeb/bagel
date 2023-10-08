import { FC } from "react";
import { Item, LoaderContainer, LoaderOverlay } from "./Loader.styles";

const Loader: FC<PropsType> = (props) => {
  const { over = false } = props;

  return (
    <LoaderOverlay over={over}>
      <LoaderContainer>
        <Item />
      </LoaderContainer>
    </LoaderOverlay>
  );
};

export default Loader;

type PropsType = {
  over?: boolean;
};
