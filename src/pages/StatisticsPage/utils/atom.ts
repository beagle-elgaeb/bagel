import { atomWithQuery } from "jotai/query";
import { loadable } from "jotai/utils";
import { statApi } from "../../../api/statApi";

export const fetchStat = async () => (await statApi.get()).data;

export const statQuery = () => ({ queryKey: ["statState"], queryFn: fetchStat });

export const statAtom = atomWithQuery(statQuery);

export const statState = loadable(statAtom);
