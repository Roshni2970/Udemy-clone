let searchInput = document.getElementById("searchInput");
let searchMenu = document.getElementById("searchMenu");

searchInput.addEventListener("click", function () {
    searchMenu.style.display = "block";
});

document.addEventListener("click", function (event) {

    if (
        !searchInput.contains(event.target) &&
        !searchMenu.contains(event.target)
    ) {
        searchMenu.style.display = "none";
    }

});