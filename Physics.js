//   Ouestions and answers Begins
  const questions = [
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correct: 1
    },
    {
        question: "Which law states that 'for every action, there is an equal and opposite reaction'?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
        correct: 2
    },
    {
        question: "What is the speed of light in vacuum?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
        correct: 0
    },
    {
        question: "Which quantity remains constant in uniform circular motion?",
        options: ["Velocity", "Acceleration", "Speed", "Displacement"],
        correct: 2
    },
    {
        question: "What is the formula for kinetic energy?",
        options: ["mgh", "½mv²", "mv", "F × d"],
        correct: 1
    },
    {
        question: "Which type of waves are sound waves?",
        options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Standing waves"],
        correct: 1
    },
    {
        question: "What is Ohm's Law?",
        options: ["V = IR", "P = VI", "E = mc²", "F = ma"],
        correct: 0
    },
    {
        question: "Which particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Ion"],
        correct: 2
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.0 m/s²"],
        correct: 0
    },
    {
        question: "Which phenomenon explains why a pencil appears bent in water?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correct: 1
    },

    // 30 More Questions Below

    {
        question: "What is the SI unit of power?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: 2
    },
    {
        question: "Which subatomic particle is negatively charged?",
        options: ["Proton", "Electron", "Neutron", "Photon"],
        correct: 1
    },
    {
        question: "What type of energy is stored in a stretched spring?",
        options: ["Kinetic", "Chemical", "Elastic potential", "Gravitational"],
        correct: 2
    },
    {
        question: "What device is used to measure electric current?",
        options: ["Voltmeter", "Thermometer", "Ammeter", "Barometer"],
        correct: 2
    },
    {
        question: "Which unit is used to measure resistance?",
        options: ["Volt", "Ohm", "Watt", "Ampere"],
        correct: 1
    },
    {
        question: "Which electromagnetic wave has the shortest wavelength?",
        options: ["Microwaves", "X-rays", "Ultraviolet", "Gamma rays"],
        correct: 3
    },
    {
        question: "Who discovered the law of gravitation?",
        options: ["Newton", "Einstein", "Faraday", "Galileo"],
        correct: 0
    },
    {
        question: "Which law explains why a balloon flies when released?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Inertia"],
        correct: 2
    },
    {
        question: "What is the frequency of a wave with period 0.01s?",
        options: ["10 Hz", "100 Hz", "1 Hz", "0.1 Hz"],
        correct: 1
    },
    {
        question: "What is the symbol for wavelength?",
        options: ["λ", "μ", "θ", "ϕ"],
        correct: 0
    },
    {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Time", "Velocity"],
        correct: 3
    },
    {
        question: "What is the unit of electric charge?",
        options: ["Coulomb", "Ohm", "Ampere", "Volt"],
        correct: 0
    },
    {
        question: "Which of these is not a renewable energy source?",
        options: ["Wind", "Solar", "Coal", "Hydro"],
        correct: 2
    },
    {
        question: "What kind of mirror is used in a car’s side mirror?",
        options: ["Convex", "Concave", "Plane", "Cylindrical"],
        correct: 0
    },
    {
        question: "Which gas is used in electric bulbs?",
        options: ["Hydrogen", "Nitrogen", "Oxygen", "Argon"],
        correct: 3
    },
    {
        question: "What is the name of Newton's First Law?",
        options: ["Law of Acceleration", "Law of Inertia", "Law of Force", "Law of Motion"],
        correct: 1
    },
    {
        question: "Which phenomenon causes echoes?",
        options: ["Refraction", "Diffraction", "Reflection", "Absorption"],
        correct: 2
    },
    {
        question: "What is the standard unit of temperature?",
        options: ["Fahrenheit", "Kelvin", "Celsius", "Rankine"],
        correct: 1
    },
    {
        question: "What device converts electrical energy into mechanical energy?",
        options: ["Generator", "Motor", "Battery", "Transformer"],
        correct: 1
    },
    {
        question: "What is the main energy transformation in a solar panel?",
        options: ["Electrical to mechanical", "Light to electrical", "Heat to mechanical", "Chemical to heat"],
        correct: 1
    },
    {
        question: "Which of the following is an example of scalar quantity?",
        options: ["Displacement", "Acceleration", "Force", "Mass"],
        correct: 3
    },
    {
        question: "What is the unit of pressure?",
        options: ["Watt", "Newton", "Pascal", "Joule"],
        correct: 2
    },
    {
        question: "Which of these particles is found in the nucleus?",
        options: ["Electron", "Photon", "Neutron", "Positron"],
        correct: 2
    },
    {
        question: "Which force pulls objects toward the Earth?",
        options: ["Friction", "Magnetism", "Gravity", "Tension"],
        correct: 2
    },
    {
        question: "What type of motion does a pendulum exhibit?",
        options: ["Linear", "Rotational", "Oscillatory", "Translational"],
        correct: 2
    },
    {
        question: "What causes tides on Earth?",
        options: ["Winds", "Sun", "Moon's gravity", "Earthquake"],
        correct: 2
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Ammeter", "Voltmeter"],
        correct: 1
    },
    {
        question: "Which wave can travel through a vacuum?",
        options: ["Sound", "Water", "Seismic", "Light"],
        correct: 3
    },
    {
        question: "In which medium does sound travel the fastest?",
        options: ["Air", "Water", "Vacuum", "Steel"],
        correct: 3
    },
    {
        question: "Which color has the shortest wavelength in visible light?",
        options: ["Red", "Green", "Blue", "Violet"],
        correct: 3
    },
];

// Question and answers Ends
        let currentQuestion = 0;
        let userAnswers = new Array(questions.length).fill(null);
        let questionStatus = new Array(questions.length).fill('not-attempted');
        let timeRemaining = 7200; // 2 hours in seconds
        let timerInterval;

// Initialization of value begins
        function initializeQuiz() {
            createQuestionGrid();
            displayQuestion(0);
            startTimer();
            updateNavigation();
        }
function retreveUserInput(){
    const userIntroduction = document.querySelector('.introduction');
const result15 = localStorage.getItem('studentInformation');
const studentName = JSON.parse(result15);
return userIntroduction.textContent = `Welcome ${studentName[0]} ${studentName[1]}  Registration Number: ${studentName[2]}`;

}
retreveUserInput()



// Initailizaition of Grid Ends

        function createQuestionGrid() {
            const grid = document.getElementById('question-grid');
            for (let i = 0; i < questions.length; i++) {
                const btn = document.createElement('div');
                btn.className = 'question-number';
                btn.textContent = i + 1;
                btn.onclick = () => goToQuestion(i);
                btn.id = `q-btn-${i}`;
                grid.appendChild(btn);
            }
            updateQuestionGrid();
        }

        function displayQuestion(index) {
            const container = document.getElementById('quiz-content');
            const question = questions[index];
            
            container.innerHTML = `
                <div class="question active">
                    <h3>Question ${index + 1}: ${question.question}</h3>
                    <div class="options">
                        ${question.options.map((option, i) => `
                            <div class="option ${userAnswers[index] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
                                <input type="radio" name="q${index}" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
                                <span>${option}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            // Mark question as visited if not already answered
            if (questionStatus[index] === 'not-attempted') {
                questionStatus[index] = 'visited';
            }

            currentQuestion = index;
            document.getElementById('current-q').textContent = index + 1;
            updateQuestionGrid();
            updateNavigation();
        }

        function selectAnswer(answerIndex) {
            userAnswers[currentQuestion] = answerIndex;
            questionStatus[currentQuestion] = 'answered';
            
            // Update UI
            const options = document.querySelectorAll('.option');
            options.forEach((option, i) => {
                option.classList.toggle('selected', i === answerIndex);
                const radio = option.querySelector('input[type="radio"]');
                radio.checked = i === answerIndex;
            });

            updateQuestionGrid();
        }

        function updateQuestionGrid() {
            for (let i = 0; i < questions.length; i++) {
                const btn = document.getElementById(`q-btn-${i}`);
                btn.className = 'question-number';
                
                if (questionStatus[i] === 'answered') {
                    btn.classList.add('answered');
                } else if (questionStatus[i] === 'visited') {
                    btn.classList.add('visited');
                }
                
                if (i === currentQuestion) {
                    btn.classList.add('current');
                }
            }
        }

        function goToQuestion(index) {
            displayQuestion(index);
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                displayQuestion(currentQuestion + 1);
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                displayQuestion(currentQuestion - 1);
            }
        }

        function updateNavigation() {
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const submitBtn = document.getElementById('submit-btn');

            prevBtn.disabled = currentQuestion === 0;
            
            if (currentQuestion === questions.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'block';
            } else {
                nextBtn.style.display = 'block';
                submitBtn.style.display = 'none';
            }
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                timeRemaining--;
                updateTimerDisplay();
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    submitQuiz();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const hours = Math.floor(timeRemaining / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = timeRemaining % 60;
            
            const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('timer').textContent = display;
            
            // Change color when time is running low
            if (timeRemaining <= 300) { // 5 minutes
                document.getElementById('timer').style.background = '#ff4757';
            }
        }

        function calculateScore() {
            let score = 0;
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === questions[i].correct) {
                   (score * questions.length)/ 100;
                }
            }
            return score;
        }

        function saveScore(score) {
            const quizResult = {
                score: score,
                totalQuestions: questions.length,
                answers: userAnswers,
                completedAt: new Date().toISOString(),
                timeSpent: 7200 - timeRemaining
            };
            
            // Save to memory (since localStorage is not available)
            window.quizResults = window.quizResults || [];
            window.quizResults.push(quizResult);
            localStorage.setItem('userResult', JSON.stringify(quizResult));
            const result = localStorage.getItem('UserResult');
           const result2 = JSON.parse(result);
           console.log(result2);
            console.log('Quiz result saved:', quizResult);
        }

        function submitQuiz() {
            clearInterval(timerInterval);
            
            const score = calculateScore();
            saveScore(score);
            
            // Show results
            document.getElementById('quiz-content').style.display = 'none';
            document.getElementById('navigation').style.display = 'none';
            document.getElementById('results').classList.add('show');
            document.querySelector('.sidebar').style.display = 'none';
            document.getElementById('final-score').textContent = `You are done with the examination. Please Leave the hall`;
            setTimeout(()=>{
               location.href = 'index.html';
            },5000);
        }

        function restartQuiz() {
            // Reset all variables
            currentQuestion = 0;
            userAnswers = new Array(questions.length).fill(null);
            questionStatus = new Array(questions.length).fill('not-attempted');
            timeRemaining = 7200;
            
            // Reset UI
            document.getElementById('quiz-content').style.display = 'block';
            document.getElementById('navigation').style.display = 'flex';
            document.getElementById('results').classList.remove('show');
            document.getElementById('timer').style.background = '#ff4757';
            
            // Restart quiz
            createQuestionGrid();
            displayQuestion(0);
            startTimer();
        }

        // Initialize the quiz when page loads
        window.onload = initializeQuiz;