import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ProvidersWrapper } from "./providers";
import "@/components/keenicons/assets/styles.css";

const rootElement = document.getElementById("root")!;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ProvidersWrapper>
            <App />
          </ProvidersWrapper>
          <ToastContainer />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
