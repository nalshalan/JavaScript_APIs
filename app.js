console.log("Hello World!\n==========\n");

const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const feedbackElement = document.getElementById("feedback");
const imgElement = document.querySelector("#imageContainer > img");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "fc2f9Fl5aL4GnERdhcss8KaREQ4cp74i";

searchButton.addEventListener("click", () => {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((response) => response.json())
    .then((res) => {
        feedbackElement.textContent = "";
        imgElement.src = res.data.images.original.url;
        searchInput.value = "";
    })
    .catch((err) => {
        console.error(err);
        feedbackElement.textContent = err.message;
    });
});
