
document.querySelector(".loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username);
            
            if (user) {
                if (password === "secret123") {
                    window.location.href = "posts.html";
                } else {
                    alert("Incorrect password!");
                }
            } else {
                alert("User not found!");
            }
        })
        .catch(error => alert("Error fetching users: " + error));
});