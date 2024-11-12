const tips = [
  "Use public transport instead of driving.",
  "Carpool with others to reduce emissions.",
  "Walk or bike for short distances.",
  "Maintain your car to reduce exhaust emissions.",
  "Use electric or hybrid vehicles.",
  "Reduce your speed when driving to save fuel.",
  "Avoid idling your car when parked.",
  "Use cruise control on highways for better fuel efficiency.",
  "Combine errands to reduce the number of trips.",
  "Use apps to track air quality and avoid driving during high pollution levels.",
  "Switch to biofuels for vehicles if available.",
  "Opt for telecommuting to reduce commuting emissions.",
  "Install a fuel-efficient engine in your vehicle.",
  "Avoid peak traffic hours to reduce time spent in traffic.",
  "Replace air filters in your vehicle regularly.",
  "Switch to energy-efficient LED bulbs.",
  "Turn off lights and electronics when not in use.",
  "Unplug chargers and devices when they’re not in use.",
  "Install solar panels for renewable energy at home.",
  "Use a programmable thermostat to reduce energy use.",
  "Insulate your home to reduce heating and cooling needs.",
  "Wash clothes in cold water to save energy.",
  "Dry clothes using a clothesline instead of a dryer.",
  "Opt for energy-efficient appliances.",
  "Install energy-efficient windows.",
  "Use ceiling fans instead of air conditioners when possible.",
  "Set your water heater to a lower temperature.",
  "Use power strips to easily switch off electronics.",
  "Cook with a microwave or toaster oven to save energy.",
  "Replace old HVAC systems with energy-efficient models.",
  "Recycle paper, plastic, glass, and metal.",
  "Compost organic waste instead of burning it.",
  "Avoid single-use plastics.",
  "Use reusable shopping bags instead of plastic bags.",
  "Opt for products with less packaging.",
  "Repair items instead of discarding them.",
  "Donate old clothes and electronics instead of throwing them away.",
  "Buy second-hand or upcycled goods.",
  "Use reusable containers instead of plastic wrap.",
  "Opt for e-bills and digital communication to save paper.",
  "Plant trees around your home to absorb CO2.",
  "Use non-toxic, eco-friendly paints.",
  "Install a rainwater harvesting system.",
  "Avoid using leaf blowers and opt for raking.",
  "Grow indoor plants that help purify the air.",
  "Fix leaks in your home to conserve water and energy.",
  "Use natural ventilation by opening windows instead of air conditioning.",
  "Opt for bamboo or recycled materials for furniture.",
  "Install a green roof to reduce heating and cooling demands.",
  "Use eco-friendly cleaning products.",
  "Eat local, organic food to reduce transportation emissions.",
  "Grow your own vegetables and herbs.",
  "Avoid red meat to reduce methane emissions from livestock.",
  "Participate in community-supported agriculture.",
  "Choose products with minimal packaging.",
  "Support sustainable fishing practices.",
  "Compost kitchen waste instead of sending it to landfills.",
  "Use cloth napkins instead of paper ones.",
  "Use reusable plates and utensils instead of disposable ones.",
  "Buy in bulk to reduce packaging waste.",
  "Encourage remote work to reduce commuting.",
  "Organize carpooling systems for employees.",
  "Install energy-efficient lighting in the office.",
  "Promote the use of public transport for business travel.",
  "Use teleconferencing instead of traveling for meetings.",
  "Install water-saving fixtures in the workplace.",
  "Print on both sides of paper to reduce paper waste.",
  "Set office computers to energy-saving modes.",
  "Recycle office supplies like paper and toner cartridges.",
  "Encourage employees to bring reusable bottles and mugs.",
  "Avoid burning leaves, wood, or trash.",
  "Use electric lawnmowers instead of gas-powered ones.",
  "Plant trees in public spaces and your community.",
  "Participate in a community clean-up.",
  "Educate others on reducing air pollution.",
  "Support or volunteer with environmental organizations.",
  "Report illegal dumping or burning in your area.",
  "Choose eco-friendly camping gear.",
  "Reduce the use of bonfires and fireworks.",
  "Support local air pollution awareness campaigns.",
  "Opt for eco-friendly accommodations.",
  "Use public transport when traveling abroad.",
  "Support sustainable tourism practices.",
  "Choose non-stop flights to reduce emissions.",
  "Avoid single-use plastics when traveling.",
  "Travel by train instead of flying when possible.",
  "Support local markets instead of big supermarkets.",
  "Carry a reusable water bottle when traveling.",
  "Choose green-certified tour operators.",
  "Participate in eco-tourism activities like tree planting.",
  "Advocate for cleaner energy policies in your community.",
  "Support businesses that use sustainable practices.",
  "Vote for leaders who prioritize environmental protection.",
  "Support carbon offset programs.",
  "Donate to environmental research or pollution control programs.",
  "Encourage your local government to invest in public transport.",
  "Participate in climate action campaigns.",
  "Attend environmental awareness events and seminars.",
  "Petition for better air quality monitoring systems in your city.",
  "Raise awareness on social media about ways to reduce air pollution."
];

// Function to show random tips
function showRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").innerText = tips[randomIndex];
}

// Automatically display a random tip when the page loads
window.onload = showRandomTip;

const quizData = [
  {
      question: "What is the main cause of air pollution in urban areas?",
      options: ["Factory emissions", "Vehicle emissions", "Forest fires", "Natural disasters"],
      correctAnswer: 1
  },
  {
      question: "Which gas is a major contributor to the greenhouse effect?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: 1
  },
  {
      question: "What percentage of the world’s population breathes polluted air?",
      options: ["45%", "70%", "90%", "30%"],
      correctAnswer: 2
  },
  {
      question: "Which type of pollution affects the Earth's ozone layer?",
      options: ["Water pollution", "Soil pollution", "Air pollution", "Noise pollution"],
      correctAnswer: 2
  },
  {
      question: "Which of the following is a primary air pollutant?",
      options: ["CO2", "O3", "NO2", "SO2"],
      correctAnswer: 0
  },
  {
      question: "What can reduce the number of airborne particulates?",
      options: ["Planting trees", "Burning more fuel", "Cutting down forests", "Building more roads"],
      correctAnswer: 0
  },
  {
      question: "What is smog composed of?",
      options: ["Smoke and fog", "Dust and air", "Water and carbon", "Sulfur and nitrogen"],
      correctAnswer: 0
  },
  {
      question: "Which of the following is a secondary pollutant?",
      options: ["Carbon monoxide", "Sulfur dioxide", "Ozone", "Particulate matter"],
      correctAnswer: 2
  },
  {
      question: "What device is used to measure air pollution?",
      options: ["Anemometer", "Thermometer", "Barometer", "Air Quality Monitor"],
      correctAnswer: 3
  },
  {
      question: "What can individuals do to reduce air pollution?",
      options: ["Use public transport", "Use more plastic bags", "Burn fossil fuels", "Drive large vehicles"],
      correctAnswer: 0
  },
  {
      question: "Which gas is considered toxic and contributes to air pollution?",
      options: ["Oxygen", "Carbon Monoxide", "Hydrogen", "Neon"],
      correctAnswer: 1
  },
  {
      question: "Which of the following is NOT a greenhouse gas?",
      options: ["Methane", "Nitrogen", "Water Vapor", "Carbon Dioxide"],
      correctAnswer: 1
  },
  {
      question: "What organization monitors global air quality?",
      options: ["WHO", "NASA", "UNICEF", "FBI"],
      correctAnswer: 0
  },
  {
      question: "Which human activity contributes the most to air pollution?",
      options: ["Agriculture", "Transportation", "Fishing", "Manufacturing"],
      correctAnswer: 1
  },
  {
      question: "Which country is known to have the worst air pollution levels?",
      options: ["Canada", "India", "Australia", "New Zealand"],
      correctAnswer: 1
  },
  {
      question: "How can schools contribute to reducing air pollution?",
      options: ["Planting trees", "Using more electricity", "Encouraging carpooling", "Using plastic utensils"],
      correctAnswer: 2
  },
  {
      question: "What is the Air Quality Index (AQI) used for?",
      options: ["Measuring temperature", "Predicting rainfall", "Measuring air pollution levels", "Monitoring soil quality"],
      correctAnswer: 2
  },
  {
      question: "Which season often has worse air pollution?",
      options: ["Spring", "Winter", "Fall", "Summer"],
      correctAnswer: 1
  },
  {
      question: "What is the term for a prolonged period of smog in a city?",
      options: ["Haze", "Heatwave", "Smog Alert", "Air Quality Alert"],
      correctAnswer: 3
  },
  {
      question: "Which of the following contributes to indoor air pollution?",
      options: ["Houseplants", "Cigarette smoke", "Open windows", "Sunlight"],
      correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const buttons = document.querySelectorAll(".quiz-container button");
  
  questionElement.textContent = quizData[currentQuestionIndex].question;
  buttons.forEach((button, index) => {
      button.textContent = quizData[currentQuestionIndex].options[index];
  });
}

function checkAnswer(selectedIndex) {
  const resultElement = document.getElementById("result");
  
  if (selectedIndex === quizData[currentQuestionIndex].correctAnswer) {
      score++;
      resultElement.textContent = "Correct!";
      resultElement.style.color = "#81C784";  // Green for correct
  } else {
      resultElement.textContent = "Wrong!";
      resultElement.style.color = "#E57373";  // Red for wrong
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizData.length) {
      setTimeout(() => {
          resultElement.textContent = "";
          loadQuestion();
      }, 1000);
  } else {
      showFinalScore();
  }
}

function showFinalScore() {
  const questionElement = document.getElementById("question");
  const resultElement = document.getElementById("result");
  const buttons = document.querySelectorAll(".quiz-container button");
  
  questionElement.textContent = `Quiz Completed! Your score: ${score}/${quizData.length}`;
  resultElement.textContent = "";
  buttons.forEach(button => button.style.display = "none");
}

window.onload = loadQuestion;
