import React from "react";
import styles from "./assets/scss/SearchBar.scss";

function SearchBar({ searchEmail }) {
    return (
        <div className={styles.Searchbar}>
            <input
                type="text"
                placeholder="찾기"
                onChange={(e) => {
                    searchEmail(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;
