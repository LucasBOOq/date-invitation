document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");

    document.getElementById("result-message").innerText = `Hey ${name}, I'm glad you are interested! Would you want to come on a date with me?`;
    document.getElementById("name-placeholder").innerText = name;
});
