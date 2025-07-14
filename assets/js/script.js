const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

window.onload = function () {
    const d = new Date;
    document.getElementById("print-date").innerHTML = `Today is ${d.toLocaleDateString("en-GB", options)}.`
}