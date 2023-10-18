import { FC } from "react";
import { Item, LoaderContainer, LoaderOverlay } from "./Loader.styles";

const Loader: FC = () => {
  return (
    <LoaderOverlay>
      <LoaderContainer>
        <Item />
      </LoaderContainer>
    </LoaderOverlay>
  );
};

export default Loader;
