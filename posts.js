document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const postLists = document.getElementById("postLists");

            posts = posts.slice(0, 20);
            posts.forEach(post => {
                const li = document.createElement("li");
                li.textContent = post.title;
                li.setAttribute("data-id", post.id);
                li.addEventListener("click", function() {
                    const id = this.getAttribute("data-id");
                    window.location.href = `post.html?id=${id}`;
                });
                postLists.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});