import { FC } from "react";
import { AppContainer } from "./App.styles";

const App: FC<PropsType> = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default App;

type PropsType = {
  children: JSX.Element;
};
