import "./assets/scss/App.scss";

function App() {
    const App = document.createElement("div");
    App.textContent = "Hello Webpack";
    App.className = "Header";
    return App;
}

export { App };
