function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Read credentials from JSON file
    fetch('jasa.json')
        .then(response => response.json())
        .then(credentials => {
            if (credentials[username] === password) {
                document.getElementById("error-message").innerText = "";
                displayWelcomeMessage();
            } else {
                document.getElementById("error-message").innerText = "Invalid username or password. Please try again.";
            }
        })
        .catch(error => console.error('Error reading credentials:', error));
}
function displayWelcomeMessage(username) {
    document.body.innerHTML = ''; // Clear the body content

    var welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = <h1>Welcome to Learn and Grow, ${username}!</h1>;
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.marginTop = '50px';
    welcomeMessage.style.color = 'white'; // Set the text color to white

    document.body.appendChild(welcomeMessage);
}
