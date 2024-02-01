function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Fetch user data from JSON file
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            var isValidUser = users.some(function(user) {
                return user.username === username && user.password === password;
            });

            if (isValidUser) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}
