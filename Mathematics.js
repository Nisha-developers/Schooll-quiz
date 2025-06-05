const questions = [
    {
        question: "What is 7 + 6?",
        options: ["11", "12", "13", "14"],
        correct: 2
    },
    {
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        correct: 2
    },
    {
        question: "What is 12 × 12?",
        options: ["124", "144", "132", "122"],
        correct: 1
    },
    {
        question: "What is 45 ÷ 5?",
        options: ["8", "9", "10", "11"],
        correct: 1
    },
    {
        question: "What is the value of π (pi) approximately?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        correct: 1
    },
    {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        correct: 1
    },
    {
        question: "What is the area of a triangle with base 10 and height 5?",
        options: ["25", "50", "30", "40"],
        correct: 0
    },
    {
        question: "What is 3²?",
        options: ["6", "9", "12", "15"],
        correct: 1
    },
    {
        question: "What is 100 ÷ 4?",
        options: ["20", "25", "30", "35"],
        correct: 1
    },
    {
        question: "Which is a prime number?",
        options: ["4", "6", "8", "7"],
        correct: 3
    },
    {
        question: "What is the perimeter of a square with side 5 cm?",
        options: ["20 cm", "25 cm", "10 cm", "15 cm"],
        correct: 0
    },
    {
        question: "What is 9 × 8?",
        options: ["72", "64", "81", "69"],
        correct: 0
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["180", "90", "45", "360"],
        correct: 1
    },
    {
        question: "What is the next number in the pattern: 2, 4, 6, 8, __?",
        options: ["10", "12", "9", "11"],
        correct: 0
    },
    {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correct: 0
    },
    {
        question: "What is the value of 10³?",
        options: ["100", "1000", "10", "10000"],
        correct: 1
    },
    {
        question: "Which of the following is an even number?",
        options: ["13", "17", "22", "19"],
        correct: 2
    },
    {
        question: "What is 0.5 as a fraction?",
        options: ["1/2", "1/4", "1/3", "2/3"],
        correct: 0
    },
    {
        question: "Which shape has 4 equal sides and 4 right angles?",
        options: ["Rectangle", "Rhombus", "Parallelogram", "Square"],
        correct: 3
    },
    {
        question: "What is 1/4 + 2/4?",
        options: ["1/2", "3/4", "1", "2"],
        correct: 1
    },
    {
        question: "What is 60% of 50?",
        options: ["25", "30", "35", "40"],
        correct: 1
    },
    {
        question: "What is the smallest 2-digit prime number?",
        options: ["11", "13", "17", "10"],
        correct: 0
    },
    {
        question: "What is the value of x if 2x = 10?",
        options: ["2", "3", "5", "10"],
        correct: 2
    },
    {
        question: "Which of these is a multiple of 6?",
        options: ["13", "14", "18", "22"],
        correct: 2
    },
    {
        question: "What is the product of 0 and any number?",
        options: ["The number", "1", "0", "Infinity"],
        correct: 2
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