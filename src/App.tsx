import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";


import "./App.css";
import store, { persistor } from "./store/store";
import AppRouter from "./routes";
function App() {
  return (


    <Provider store={store}>
      <ToastContainer autoClose={3000} limit={1} />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider >

  );
}
export default App;
