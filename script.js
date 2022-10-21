const overLay = document.querySelector("#overlay");

document.querySelector("#button").addEventListener("click",() => {
    overLay.style.display = "block";
})

document.querySelector("#close-model-btn").addEventListener("click",() => {
    overLay.style.display = "none";
})