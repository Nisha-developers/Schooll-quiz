//   Ouestions and answers Begins
  const questions = [
    {
        question: "What is the atomic number of Hydrogen?",
        options: ["0", "1", "2", "3"],
        correct: 1
    },
    {
        question: "Which gas is most abundant in Earth’s atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is H₂O commonly known as?",
        options: ["Hydrogen Peroxide", "Salt", "Water", "Hydrochloric Acid"],
        correct: 2
    },
    {
        question: "What is the pH of pure water?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Which element is a noble gas?",
        options: ["Oxygen", "Chlorine", "Nitrogen", "Helium"],
        correct: 3
    },
    {
        question: "What is the chemical formula of table salt?",
        options: ["NaCl", "KCl", "NaCO₃", "HCl"],
        correct: 0
    },
    {
        question: "Which acid is found in vinegar?",
        options: ["Citric Acid", "Acetic Acid", "Sulfuric Acid", "Nitric Acid"],
        correct: 1
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Gold", "Mercury", "Iron", "Aluminium"],
        correct: 1
    },
    {
        question: "Which particle has a positive charge?",
        options: ["Electron", "Neutron", "Proton", "Photon"],
        correct: 2
    },
    {
        question: "What is the symbol for potassium?",
        options: ["P", "Po", "Pt", "K"],
        correct: 3
    },
    {
        question: "Which process separates mixtures based on boiling points?",
        options: ["Filtration", "Crystallization", "Distillation", "Sublimation"],
        correct: 2
    },
    {
        question: "Which gas turns limewater milky?",
        options: ["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 0
    },
    {
        question: "What type of bond is formed by sharing electrons?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 1
    },
    {
        question: "What is the molar mass of water?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
        correct: 1
    },
    {
        question: "Which element is used in pencils?",
        options: ["Carbon", "Lead", "Zinc", "Copper"],
        correct: 0
    },
    {
        question: "Which of the following is an alkali metal?",
        options: ["Calcium", "Potassium", "Aluminium", "Iron"],
        correct: 1
    },
    {
        question: "Which color does phenolphthalein turn in a base?",
        options: ["Colorless", "Red", "Pink", "Blue"],
        correct: 2
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Go"],
        correct: 1
    },
    {
        question: "Which of the following is a compound?",
        options: ["Oxygen", "Hydrogen", "Water", "Nitrogen"],
        correct: 2
    },
    {
        question: "Which gas is released during photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 1
    },
    {
        question: "Which element has the highest electronegativity?",
        options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
        correct: 0
    },
    {
        question: "Which acid is found in the stomach?",
        options: ["Acetic Acid", "Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid"],
        correct: 1
    },
    {
        question: "Which gas is used to fill balloons?",
        options: ["Hydrogen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correct: 3
    },
    {
        question: "Which element is a halogen?",
        options: ["Neon", "Iodine", "Sodium", "Magnesium"],
        correct: 1
    },
    {
        question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
        options: ["Decomposition", "Combustion", "Displacement", "Combination"],
        correct: 3
    },
    {
        question: "What is the chemical name for rust?",
        options: ["Iron Sulfate", "Iron Hydroxide", "Iron Oxide", "Iron Nitrate"],
        correct: 2
    },
    {
        question: "Which of the following is a chemical change?",
        options: ["Melting ice", "Boiling water", "Burning wood", "Breaking glass"],
        correct: 2
    },
    {
        question: "Which of these is a metalloid?",
        options: ["Silicon", "Sodium", "Sulfur", "Silver"],
        correct: 0
    },
    {
        question: "What is Avogadro’s number?",
        options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10¹⁹"],
        correct: 1
    },
    {
        question: "Which of the following is not an acid?",
        options: ["HCl", "NaOH", "H₂SO₄", "CH₃COOH"],
        correct: 1
    }
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