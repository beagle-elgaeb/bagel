import { Provider } from "jotai";
import { queryClientAtom } from "jotai/query";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { STATISTICS } from "./api/routes";
import App from "./App";
import Loader from "./components/Loader";
import { StatisticsPage, WarningPage } from "./pages";
import "./styles/index.css";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="*" element={<WarningPage code="page_not_found" />} />

      <Route path="/" element={<Navigate to={STATISTICS} />} />

      <Route path={STATISTICS} element={<StatisticsPage />} />
    </Routes>
  </Suspense>
);

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider initialValues={[[queryClientAtom, queryClient]] as const}>
      <HashRouter>
        <App>
          <AppRoutes />
        </App>
        
      </HashRouter>
    </Provider>
  </QueryClientProvider>,

  document.getElementById("root")
);
