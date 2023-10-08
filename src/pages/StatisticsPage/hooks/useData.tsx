import { useAtom } from "jotai";
import Loader from "../../../components/Loader";
import { unknownErrorText } from "../../../utils/getErrorMessage";
import { WarningText } from "../../WarningPage/WarningPage.styles";
import { statState } from "../utils/atom";

export const useData = () => {
  const [loadableData] = useAtom(statState);

  const data = loadableData.state === "hasData" ? loadableData.data : undefined;

  const totalCount = data
    ? Object.keys(data)
        .map((key) => data[key as keyof typeof data])
        .reduce((sum, datum) => sum + datum, 0)
    : 0;

  const dataWrapper = (component: JSX.Element) =>
    loadableData.state === "loading" ? (
      <Loader />
    ) : loadableData.state === "hasError" ? (
      <WarningText>{unknownErrorText}</WarningText>
    ) : (
      component
    );

  return {
    data,
    totalCount,
    dataWrapper,
  };
};

// ("TypeError: queryClient.defaultQueryObserverOptions is not a function
// at atom.dataAtom.dataAtom [as read] (http://localhost:3000/node_modules/.vite/jotai_query.js?v=4898471f:63:42)
// at readAtomState (http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:302:36)
// at http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:304:65
// Object.read (http://localhost:3000/node_modules/.vite/jotai_query.js?v=4898471f:95:26)
// readAtomState (http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:302:36)
// http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:304:65
// Object.read (http://localhost:3000/node_modules/.vite/jotai_utils.js?v=4898471f:589:22)
// readAtomState (http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:302:36)
// http://localhost:3000/node_modules/.vite/chunk-K6WNZRB3.js?v=4898471f:304:65
// Object.read (http://localhost:3000/node_modules/.vite/jotai_utils.js?v=4898471f:622:28)");
