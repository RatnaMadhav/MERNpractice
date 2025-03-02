console.log(`Hello!`);
console.log("Hello World!!!");
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("clickButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.style.display = "block";
    });
});