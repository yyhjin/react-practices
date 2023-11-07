import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li>
                    <Link to={"/guestbook"}>[Guestbook]</Link>
                </li>
            </ul>
        </div>
    );
}
