import logo from "./logo.svg";
import BasePage from "./pages/basePage";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BasePage />;
    </Provider>
  );
}

export default App;
