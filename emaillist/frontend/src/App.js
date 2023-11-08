import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data';

function App() {
    console.log("안녕!");
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {
        try {
            const response = await fetch("/api", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(email),
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== "success") {
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails([json.data, ...emails]);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kw=${keyword ? keyword : ""}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== "success") {
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails(json.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div id={"App"}>
            <RegisterForm addEmail={addEmail} />
            <SearchBar fetchEmails={fetchEmails} />
            {emails === null ? null : <Emaillist emails={emails} />}
        </div>
    );
}

export { App };
