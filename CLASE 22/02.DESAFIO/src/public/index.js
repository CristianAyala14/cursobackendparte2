const form = document.getElementById("baseForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);

    fetch("/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(json => {
        if (json.status === "success") {
            console.log(json.status);
        } 
    });
});