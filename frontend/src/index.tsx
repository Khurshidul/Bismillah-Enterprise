import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Loading from "./components/Loading/Loading";
import AuthProvider from "./context/AuthProvider";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={client}>
        <React.Suspense fallback={<Loading/>}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </React.Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>,
);


reportWebVitals();
