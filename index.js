// Get the price filter select element
const priceFilter = document.getElementById("price-select");

// Add event listener for when the value of the select element changes
priceFilter.addEventListener("change", () => {
    // Get all the product cards
    const productCards = document.querySelectorAll(".product-card");
    // Get the value of the select element
    const priceFilterValue = priceFilter.value;
    // Loop through each product card and show or hide based on the price filter value
    productCards.forEach((card) => {
        const price = card.querySelector(".price").textContent.replace("$", "");
        if (
            priceFilterValue === "all" ||
            (priceFilterValue === "under-50" && price < 50) ||
            (priceFilterValue === "under-100" && price >= 50 && price < 100) ||
            (priceFilterValue === "under-200" && price >= 100 && price < 200) ||
            (priceFilterValue === "over-200" && price >= 200)
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// Get all the color filter links
const colorFilterLinks = document.querySelectorAll(".color-filter li a");

// Add event listener for when a color filter link is clicked
colorFilterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        // Get the color of the link
        const color = link.dataset.color;
        // Get all the product cards
        const productCards = document.querySelectorAll(".product-card");
        // Loop through each product card and show or hide based on the color filter value
        productCards.forEach((card) => {
            if (color === "all" || card.dataset.color === color) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});