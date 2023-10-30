import "./assets/scss/App.scss";
import logo from "./assets/images/logo.svg";

function App() {
    const App = document.createElement("div");
    App.textContent = "Hello Webpack";
    App.className = "Header";
    App.innerHTML = `<image src='${logo}'>`;
    return App;
}

export { App };
