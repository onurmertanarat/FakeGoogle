document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-link").addEventListener("click", function () {
        const searchQuery = document.getElementById("search-query").value;
        if (searchQuery) {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
        }
    });
    document.getElementById("feeling-lucky").addEventListener("click", function () {
        const searchQuery = document.getElementById("search-query").value;
        if (searchQuery) {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery) + "&btnI=I%27m+Feeling+Lucky&nord=1";
        }
    });
});