//   Ouestions and answers Begins
 const questions = [
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples."
    ],
    correct: 2
  },
   {
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples."
    ],
    correct: 2
  },
  {
    question: "Choose the correct past tense form: 'They _____ to the cinema last night.'",
    options: ["go", "went", "gone", "going"],
    correct: 1
  },
  {
    question: "Identify the adjective in the sentence: 'The quick brown fox jumps over the lazy dog.'",
    options: ["jumps", "over", "quick", "dog"],
    correct: 2
  },
  {
    question: "Which word is a synonym for 'happy'?",
    options: ["sad", "elated", "angry", "tired"],
    correct: 1
  },
  {
    question: "Select the correct article: 'I saw _____ elephant at the zoo.'",
    options: ["a", "an", "the", "no article needed"],
    correct: 1
  },
  {
    question: "Choose the correct form: 'She has _____ her homework.'",
    options: ["do", "did", "done", "does"],
    correct: 2
  },
  {
    question: "Identify the noun in the sentence: 'Reading improves your vocabulary.'",
    options: ["improves", "your", "reading", "vocabulary"],
    correct: 2
  },
  {
    question: "Which sentence is in the future tense?",
    options: [
      "I eat breakfast.",
      "I ate breakfast.",
      "I will eat breakfast.",
      "I am eating breakfast."
    ],
    correct: 2
  },
  {
    question: "Choose the correct preposition: 'He is good _____ mathematics.'",
    options: ["in", "at", "on", "with"],
    correct: 1
  },
  {
    question: "Select the correct comparative form: 'This book is _____ than that one.'",
    options: ["good", "better", "best", "more good"],
    correct: 1
  },
  {
    question: "Choose the correct plural form of 'child'.",
    options: ["childs", "childes", "children", "child"],
    correct: 2
  },
  {
    question: "What is the antonym of 'difficult'?",
    options: ["hard", "easy", "tough", "complex"],
    correct: 1
  },
  {
    question: "Identify the verb in the sentence: 'The dog barked loudly.'",
    options: ["dog", "barked", "loudly", "the"],
    correct: 1
  },
  {
    question: "Fill in the blank: 'She _____ going to school every day.'",
    options: ["is", "are", "am", "be"],
    correct: 0
  },
  {
    question: "Which of the following is a pronoun?",
    options: ["book", "she", "run", "quickly"],
    correct: 1
  },
  {
    question: "Select the correct sentence:",
    options: [
      "He don't like pizza.",
      "He doesn't likes pizza.",
      "He doesn't like pizza.",
      "He not like pizza."
    ],
    correct: 2
  },
  {
    question: "Choose the correct past participle: 'They have _____ the game.'",
    options: ["win", "won", "winning", "winned"],
    correct: 1
  },
  {
    question: "What is the synonym of 'quick'?",
    options: ["fast", "slow", "late", "weak"],
    correct: 0
  },
  {
    question: "Choose the correct conjunction: 'I like tea _____ coffee.'",
    options: ["and", "but", "or", "because"],
    correct: 0
  },
  {
    question: "Identify the adverb in the sentence: 'She runs quickly.'",
    options: ["she", "runs", "quickly", "none"],
    correct: 2
  },
  {
    question: "Fill in the blank: '_____ you like some coffee?'",
    options: ["Do", "Does", "Did", "Are"],
    correct: 0
  },
  {
    question: "Which sentence is a question?",
    options: [
      "He is going to school.",
      "Is he going to school?",
      "He going to school.",
      "Going to school."
    ],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "Their going to the park.",
      "There going to the park.",
      "They're going to the park.",
      "They are going park."
    ],
    correct: 2
  },
  {
    question: "What is the plural form of 'mouse'?",
    options: ["mouses", "mices", "mice", "mouse"],
    correct: 2
  },
  {
    question: "Select the correct past tense form: 'She _____ a letter yesterday.'",
    options: ["write", "wrote", "written", "writing"],
    correct: 1
  },
  {
    question: "Choose the correct form: 'He _____ playing football now.'",
    options: ["is", "are", "am", "be"],
    correct: 0
  },
  {
    question: "Identify the preposition: 'The cat is under the table.'",
    options: ["cat", "under", "table", "is"],
    correct: 1
  },
  {
    question: "Which sentence uses the correct capitalization?",
    options: [
      "she lives in London.",
      "She lives in london.",
      "She lives in London.",
      "she Lives in London."
    ],
    correct: 2
  },
  {
    question: "Select the correct possessive pronoun:",
    options: ["his", "him", "he", "her"],
    correct: 0
  },
  {
    question: "What is the antonym of 'brave'?",
    options: ["bold", "cowardly", "strong", "fearless"],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "I has a dog.",
      "I have a dog.",
      "I having a dog.",
      "I haves a dog."
    ],
    correct: 1
  },
  {
    question: "Identify the subject in the sentence: 'The birds are singing.'",
    options: ["birds", "are", "singing", "the"],
    correct: 0
  },
  {
    question: "Which word is a conjunction?",
    options: ["and", "quickly", "beautiful", "run"],
    correct: 0
  },
  {
    question: "Fill in the blank: 'He _____ not like ice cream.'",
    options: ["do", "does", "did", "done"],
    correct: 1
  },
  {
    question: "What is the correct plural form of 'knife'?",
    options: ["knifes", "knives", "knife", "knifves"],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "She can sings well.",
      "She can sing well.",
      "She can sang well.",
      "She can singing well."
    ],
    correct: 1
  },
  {
    question: "Identify the correct spelling:",
    options: ["accomodate", "accommodate", "acommodate", "acommadate"],
    correct: 1
  },
  {
    question: "Select the correct verb form: 'They _____ going to the market.'",
    options: ["is", "are", "am", "be"],
    correct: 1
  },
  {
    question: "Fill in the blank: 'We have _____ our homework.'",
    options: ["do", "done", "did", "doing"],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "He don't want to go.",
      "He doesn't wants to go.",
      "He doesn't want to go.",
      "He not wants to go."
    ],
    correct: 2
  },
  {
    question: "What is the antonym of 'cold'?",
    options: ["hot", "warm", "cool", "chilly"],
    correct: 0
  },
  {
    question: "Choose the correct form: 'They _____ playing tennis now.'",
    options: ["is", "are", "am", "be"],
    correct: 1
  },
  {
    question: "Identify the object in the sentence: 'She reads a book.'",
    options: ["she", "reads", "a", "book"],
    correct: 3
  },
  {
    question: "Which word is an interjection?",
    options: ["Wow!", "Run", "Beautiful", "Quickly"],
    correct: 0
  },
  {
    question: "Fill in the blank: 'I _____ to the store yesterday.'",
    options: ["go", "went", "gone", "going"],
    correct: 1
  },
  {
    question: "Select the correct sentence:",
    options: [
      "Its raining outside.",
      "It's raining outside.",
      "Its' raining outside.",
      "It raining outside."
    ],
    correct: 1
  },
  {
    question: "Choose the correct homophone: 'I can't _____ the answer.'",
    options: ["sea", "see", "say", "saw"],
    correct: 1
  },
  {
    question: "What is the synonym of 'big'?",
    options: ["large", "small", "tiny", "short"],
    correct: 0
  },
  {
    question: "Identify the type of sentence: 'Close the door!'",
    options: ["declarative", "interrogative", "imperative", "exclamatory"],
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