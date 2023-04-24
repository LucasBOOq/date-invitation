document.getElementById("invitation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const status = document.getElementById("status").value;

    if (name === "" || age === "" || status === "") {
        alert("Please fill out all the fields.");
        return;
    }

    if (status === "single") {
        window.location.href = `result.html?name=${encodeURIComponent(name)}`;
    } else {
        alert("Oops! It seems like you're not single. Let's catch up another time!");
    }
});
