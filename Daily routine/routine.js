function addMeal() {
    const input = document.getElementById("mealInput");
    const meal = input.value.trim();
    if (!meal) return;

    // Create list item
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = meal;

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(removeBtn);

    document.getElementById("mealList").appendChild(li);

    input.value = "";
}


