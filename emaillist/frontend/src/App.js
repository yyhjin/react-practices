import React from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data";

function App() {
    return (
        <div id={"App"}>
            <RegisterForm />
            <SearchBar />
            <Emaillist emails={data} />
        </div>
    );
}

export { App };
