// JavaScript to handle navigation and interactive functionality

// Select all navigation links and sections
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove 'active' class from all links and sections
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to clicked link
        this.classList.add('active');

        // Get the target section based on the clicked link's href
        const targetId = this.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Initial setup: display the home section by default when the page loads
document.getElementById('home').classList.add('active');
document.querySelector('a[href="#home"]').classList.add('active');

// Quiz Data
const quizQuestions = [
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: "Albert Einstein",
        image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779029/Albert_Einstein_Head_w5b1vx.jpg"
    },
    {
        question: "What element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Osmium", "Ozone"],
        correctAnswer: "Oxygen",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779103/lung-oxygen_mfoang.jpg"
    },
    {
        question: "Which scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Albert Einstein",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779029/Albert_Einstein_Head_w5b1vx.jpg"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Hg"],
        correctAnswer: "Au",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731778999/9c47cf1a-f852-4ca1-8718-5d1d89166111_mebo49.webp"
    },
    {
        question: "What is the smallest unit of a chemical element?",
        options: ["Molecule", "Proton", "Atom", "Electron"],
        correctAnswer: "Atom",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779034/atom-artwork-160936095-58a8f5683df78c345b8e53be_z1qoya.jpg"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "H2O2", "O2"],
        correctAnswer: "H2O",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779079/images_nvgvdl.jpg"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "186,000 km/s", "100,000 km/s"],
        correctAnswer: "186,000 km/s",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779157/Speed-of-light_ltnyyt.png"
    },
    {
        question: "What is the hardest known natural material on Earth?",
        options: ["Diamond", "Graphene", "Gold", "Platinum"],
        correctAnswer: "Diamond",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779060/diamond-ss_ijvfbn.webp"
    },
    {
        question: "What is the most common gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correctAnswer: "Nitrogen",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779095/liquid-nitrogen-500x500_mfh2lp.webp"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Po", "Pt"],
        correctAnswer: "K",
          image: "https://res.cloudinary.com/dupstdgwz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731779071/fragments-Potassium-metal_fikm4m.webp"
    }
];

let currentQuestion = 0;
let score = 0;

// Function to load the current quiz question
function loadQuiz() {
    const quiz = quizQuestions[currentQuestion];
    const quizContainer = document.getElementById("quizContainer");
    const quizImage = document.getElementById("quizImage");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Set quiz question and options
    quizImage.src = quiz.image;
    questionElement.innerText = quiz.question;
    optionsElement.innerHTML = '';
    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function to check the answer and move to the next question
function checkAnswer(answer) {
    const quizResult = document.getElementById("quizResult");
    const quiz = quizQuestions[currentQuestion];

    if (answer === quiz.correctAnswer) {
        score++; // Increase score for correct answer
        quizResult.innerText = "Correct!";
    } else {
        quizResult.innerText = `Wrong! The correct answer was: ${quiz.correctAnswer}`;
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuiz(); // Load next question
        } else {
            displayScore(); // If all questions are completed, display the score
        }
    }, 2000);
}

// Function to display the final score after all questions are answered
function displayScore() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `<h3>Your final score is: ${score} / ${quizQuestions.length}</h3>`;
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quizContainer.appendChild(restartButton);
}

// Function to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuiz(); // Load the first question
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ''; // Clear the score and restart button
}

// Load the first quiz question
loadQuiz();

// Joke Functionality
function fetchJoke() {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why don't programmers like nature? It has too many bugs!",
        "Why did the developer go broke? Because he used up all his cache!",
        "Why can't you trust an atom? Because they make up everything!",
        "What did the proton say to the electron? 'Why are you so negative?'",
        "Why did the physicist break up with the biologist? They had no chemistry.",
        "Why don’t skeletons fight each other? They don’t have the guts!",
    ];

    // Randomly select a joke from the list
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke
    document.getElementById("joke").innerText = randomJoke;
    document.getElementById("jokeEmoji").innerText = "😂";
}



// Weather Functionality
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        document.getElementById("weather").innerText = "Please enter a city name.";
        return;
    }

    try {
        const apiKey = '0b55a5b427cd5245783af0009db7b1fb'; // Replace with your API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById("weather").innerText = "City not found.";
        } else {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            document.getElementById("weather").innerText = `Weather in ${city}: ${weatherDescription}, Temp: ${temperature}°C, Humidity: ${humidity}%`;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById("weather").innerText = "Error fetching weather data.";
    }
}
let currentIndex = 0;

// Function to move the carousel
function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    
    // Update the current index
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Ensure looping through the images
    
    // Move the carousel by updating the transform property of the .carousel-images container
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide images
}

// Optionally, you can call `moveCarousel(1)` to show the first image on page load or trigger on a timer
// Example: moveCarousel(1); to show the first image
