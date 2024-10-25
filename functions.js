// Preload the image data and HTML content
const imageData = [
    { src: 'images/Electrical/Battery Domestic.png', keywords: ['Battery', 'backup battery'] },
    { src: 'images/Electrical/Battery Industry.png', keywords: ['Battery', 'backup battery'] },
    { src: 'images/Electrical/DB Switch Industry-Domestic.webp', keywords: ['switch'] },
    { src: 'images/Electrical/DB Switch Industry.webp', keywords: ['switch'] },
    { src: 'images/Electrical/industry 12kw invert.png', keywords: ['invert', 'inverter'] },
    { src: 'images/Electrical/industry 16kw invert.png', keywords: ['invert', 'inverter'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic.webp', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic 2.webp', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Kit Domestic 3.webp', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Kit Industry.png', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Kit Industry 2.png', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Kit Industry 3.png', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load SHedding Kit.png', keywords: ['kit', 'load shedding'] },
    { src: 'images/Electrical/Load Shedding Protect.jpg', keywords: ['Protect', 'Shedding protect'] },
    { src: 'images/Electrical/Solar Panel Domestic.png', keywords: ['Solar Panel Domestic', 'panel', 'solar panel'] },
    { src: 'images/Electrical/Solar Panel Industry.png', keywords: ['Solar Panel Industry', 'panel', 'solar panel'] },
    { src: 'images/Electrical/Solar System.png', keywords: ['Solar', 'Solar System', 'solar'] },
    { src: 'images/Electrical/Solar System 2.png', keywords: ['Solar', 'Solar system', 'solar'] },
    { src: 'images/Computing/amd upgrade kit.jpeg', keywords: ['amd', 'amd upgrade', 'kit'] },
    { src: 'images/Computing/amd.jpg', keywords: ['amd', 'amd computer'] },
    { src: 'images/Computing/dell workstation.webp', keywords: ['station', 'work', 'workstation'] },
    { src: 'images/Computing/intel upgrade kit.jpeg', keywords: ['intel', 'intel upgrade', 'kit'] },
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

// Function to handle user registration
function registerUser() {
    // Get the input values
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Perform validation or registration logic here

    // Display success message
    document.getElementById('regMessage').textContent = username + "Successfully registered!";
}

// Function to handle user login
function loginUser() {
    // Get the input values
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Perform validation or login logic here

    // Display success message
    document.getElementById('loginMessage').textContent = username +  " Successfully logged in!";
}

