import { AxiosResponse } from "axios";
import { instance } from "./api";

export const statApi = {
  get: async (): Promise<AxiosResponse<StatResponseType>> => instance.get("/stat"),
};

export type StatResponseType = {
  exploitation: number;
  creation: number;
  infrastructure: number;
};
