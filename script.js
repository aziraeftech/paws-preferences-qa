const totalCats = 10; 
let currentIndex = 0;
let likedCats = [];
let catImages = [];

const catImage = document.getElementById("cat-image");
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const app = document.getElementById("app");
const summary = document.getElementById("summary");
const likeCount = document.getElementById("like-count");
const likedImagesContainer = document.getElementById("liked-images");

async function loadCats() {
    for (let i = 0; i < totalCats; i++) {
        catImages.push(`https://cataas.com/cat?random=${Math.random()}`);
    }
    showCat();
}

function showCat() {
    if (currentIndex < totalCats) {
        catImage.src = catImages[currentIndex];
    } else {
        showSummary();
    }
}

likeBtn.addEventListener("click", () => {
    likedCats.push(catImages[currentIndex]);
    currentIndex++;
    showCat();
});

dislikeBtn.addEventListener("click", () => {
    currentIndex++;
    showCat();
});

function showSummary() {
    app.classList.add("hidden");
    summary.classList.remove("hidden");

    likeCount.textContent = likedCats.length;

    likedCats.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        likedImagesContainer.appendChild(img);
    });
}

loadCats();
