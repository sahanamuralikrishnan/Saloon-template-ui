document.addEventListener('DOMContentLoaded', () => {
    console.log("Flipkart Clone Loaded");

    // Login Interaction
    const loginBtn = document.querySelector('._1_3w1N');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Login Modal would open here.");
        });
    }

    // Search Interaction
    const searchInput = document.querySelector('._3704LK');
    const searchBtn = document.querySelector('.L0Z3Pu');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const query = searchInput.value;
            if (query) {
                alert(`Searching for: ${query}`);
            } else {
                alert("Please enter a search term");
            }
        });
    }

    // Category Hover Effect Simulation (Logging)
    const categories = document.querySelectorAll('._1ch8e_');
    categories.forEach(cat => {
        cat.addEventListener('mouseenter', () => {
            console.log(`Hovering over: ${cat.querySelector('._2I9KP_').innerText}`);
        });
    });

    // Slider controls (if we added buttons)
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => alert("Previous Slide"));
        nextBtn.addEventListener('click', () => alert("Next Slide"));
    }
});
