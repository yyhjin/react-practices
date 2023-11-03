import React, { useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data";

function App() {
    const [emails, setEmails] = useState(data);
    const searchEmail = (keyword) => {
        const newEmails = data.filter(
            (email) =>
                email.firstName.indexOf(keyword) !== -1 ||
                email.lastName.indexOf(keyword) !== -1 ||
                email.email.indexOf(keyword) !== -1
        );
        setEmails(newEmails);
    };

    return (
        <div id={"App"}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail} />
            <Emaillist emails={emails} />
        </div>
    );
}

export { App };
