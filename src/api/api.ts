import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { setupMocks } from "./mockData";

export const setupAxios = () => {
  const instance = axios.create();
  const mock = new MockAdapter(instance);

  return { instance, mock };
};

export const { instance, mock } = setupAxios();

setupMocks(mock);
