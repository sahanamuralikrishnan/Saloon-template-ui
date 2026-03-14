document.querySelector("#addbtn").addEventListener("click",  () => {
    const inputField = document.querySelector("#mealInput");
    const inputValue = inputField.value.trim();

    if (inputValue === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${inputValue} <button class="remove-btn">-</button>`;


    document.querySelector("#mealList").appendChild(li);
    document.querySelector("#mealList").appendChild(document.createElement("br"));


    li.querySelector(".remove-btn").addEventListener("click", (event) => {
            event.target.parentElement.remove();
    });


    inputField.value = "";
});

document.querySelectorAll(".remove-btn").forEach(btn => {  
    btn.addEventListener("click", function () {
        this.parentElement.remove();
    });
}); 

document.body.style.backgroundColor = "beige";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.fontSize = "15px";
document.body.

