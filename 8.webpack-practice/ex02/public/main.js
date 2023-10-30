(() => {
    "use strict";
    document.getElementById("root").appendChild(
        (function () {
            const t = document.createElement("div");
            return (t.textContent = "Hello Wolrd"), t;
        })()
    );
})();
