// Preload the image data and HTML content
const imageData = [
    { src: 'images/Electrical/Battery Domestic.png', keywords: ['Battery', 'backup battery', 'electrical'] },
    { src: 'images/Electrical/Battery Industry.png', keywords: ['Battery', 'backup battery', 'electrical'] },
    { src: 'images/Electrical/DB Switch Industry-Domestic.webp', keywords: ['switch', 'electrical'] },
    { src: 'images/Electrical/DB Switch Industry.webp', keywords: ['switch', 'electrical'] },
    { src: 'images/Electrical/industry 12kw invert.png', keywords: ['invert', 'inverter', 'electrical'] },
    { src: 'images/Electrical/industry 16kw invert.png', keywords: ['invert', 'inverter', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic.webp', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic 2.webp', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic 3.webp', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Industry.png', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Industry 2.png', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Kit Industry 3.png', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load SHedding Kit.png', keywords: ['kit', 'load shedding', 'electrical'] },
    { src: 'images/Electrical/Load Shedding Protect.jpg', keywords: ['Protect', 'Shedding protect', 'electrical'] },
    { src: 'images/Electrical/Solar Panel Domestic.png', keywords: ['Solar Panel Domestic', 'panel', 'solar panel', 'electrical'] },
    { src: 'images/Electrical/Solar Panel Industry.png', keywords: ['Solar Panel Industry', 'panel', 'solar panel', 'electrical'] },
    { src: 'images/Electrical/Solar System.png', keywords: ['Solar', 'Solar System', 'solar', 'electrical'] },
    { src: 'images/Electrical/Solar System 2.png', keywords: ['Solar', 'Solar system', 'solar', 'electrical'] },
    { src: 'images/Computing/amd upgrade kit.jpeg', keywords: ['amd', 'amd upgrade', 'kit', 'computer'] },
    { src: 'images/Computing/amd.jpg', keywords: ['amd', 'amd computer'] },
    { src: 'images/Computing/dell workstation.webp', keywords: ['station', 'work', 'workstation', 'computer'] },
    { src: 'images/Computing/intel upgrade kit.jpeg', keywords: ['intel', 'intel upgrade', 'kit', 'computer'] },
    { src: 'images/Computing/intel.jpg', keywords: ['intel', 'intel computer'] },
    // Add more images and keywords as necessary
];
//********************************************************* */
//nav bar function
//********************************************************** */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//******************************************************* */
//search function
//******************************************************** */
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    const filteredImages = imageData.filter(image => {
        return image.keywords.some(keyword => keyword.includes(searchInput));
    });

    if (filteredImages.length > 0) {
        filteredImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.keywords.join(', ');
            imgElement.onclick = () => {
                window.location.href = image.src;
            };
            searchResults.appendChild(imgElement);
        });
    } else {
        searchResults.innerHTML = 'No results found.';
    }
}
//********************************************************************** */
// Function to toggle the visibility of forms
function toggleForm(formId) {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

let loginuser = "";
let loginpass = "";
// Function to handle user registration
function registerUser() {
    // Get the input values
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Perform validation or registration logic here
    if (username != "" && password != "") {
        loginuser = username;
        loginpass = password;
        document.getElementById('regMessage').textContent = username + "Successfully registered!";
    } else {
        document.getElementById('regMessage').textContent = username + "Enter Valid Username or Password!";
    }

    // Display success message


}

// Function to handle user login
function loginUser() {
    // Get the input values
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Perform validation or login logic here

    if (loginuser === username && loginpass === password) {
        document.getElementById('loginMessage').textContent = username + " Successfully logged in!";
    } else {
        document.getElementById('loginMessage').textContent = username + " Login Unsuccessful!";
    }
    // Display success message

}

//Function to Validate Email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
document.getElementById("contactForm").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("All fields are required!");
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    }
});

