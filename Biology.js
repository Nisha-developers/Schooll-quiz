//   Ouestions and answers Begins
  const questions = [
    {
        question: "What is the basic unit of life?",
        options: ["Organ", "Tissue", "Cell", "Organism"],
        correct: 2
    },
    {
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
        correct: 1
    },
    {
        question: "What is the green pigment in plants called?",
        options: ["Chloroplast", "Chlorophyll", "Xylem", "Phloem"],
        correct: 1
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        correct: 2
    },
    {
        question: "What type of reproduction involves only one parent?",
        options: ["Sexual", "Binary", "Asexual", "Fusion"],
        correct: 2
    },
    {
        question: "What do red blood cells transport?",
        options: ["Nutrients", "Oxygen", "Hormones", "Carbon dioxide"],
        correct: 1
    },
    {
        question: "Which organ filters blood in the human body?",
        options: ["Heart", "Liver", "Kidney", "Lungs"],
        correct: 2
    },
    {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correct: 2
    },
    {
        question: "Which system controls body activities using hormones?",
        options: ["Nervous system", "Digestive system", "Respiratory system", "Endocrine system"],
        correct: 3
    },
    {
        question: "Which blood cells fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        correct: 1
    },
    {
        question: "What is the genetic material in humans?",
        options: ["RNA", "ATP", "DNA", "Enzyme"],
        correct: 2
    },
    {
        question: "Which part of the brain controls balance?",
        options: ["Cerebrum", "Medulla", "Cerebellum", "Spinal cord"],
        correct: 2
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Ulna", "Humerus"],
        correct: 1
    },
    {
        question: "What kind of blood vessel carries blood back to the heart?",
        options: ["Arteries", "Capillaries", "Veins", "Nerves"],
        correct: 2
    },
    {
        question: "What is the liquid part of blood called?",
        options: ["Plasma", "Platelet", "Hemoglobin", "Antibody"],
        correct: 0
    },
    {
        question: "Which kingdom do mushrooms belong to?",
        options: ["Animalia", "Plantae", "Fungi", "Protista"],
        correct: 2
    },
    {
        question: "Which vitamin is produced in the skin by sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correct: 2
    },
    {
        question: "Which organ is responsible for producing insulin?",
        options: ["Liver", "Stomach", "Pancreas", "Intestine"],
        correct: 2
    },
    {
        question: "Which organ helps in detoxification of the blood?",
        options: ["Liver", "Lungs", "Kidney", "Heart"],
        correct: 0
    },
    {
        question: "Which part of the plant anchors it to the ground?",
        options: ["Leaf", "Stem", "Root", "Flower"],
        correct: 2
    },
    {
        question: "Which cells carry oxygen in the blood?",
        options: ["Platelets", "Neurons", "Red blood cells", "White blood cells"],
        correct: 2
    },
    {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        question: "Which organ is responsible for respiration in humans?",
        options: ["Heart", "Lungs", "Liver", "Kidney"],
        correct: 1
    },
    {
        question: "Which blood group is known as the universal donor?",
        options: ["A", "B", "O", "AB"],
        correct: 2
    },
    {
        question: "What is the main function of white blood cells?",
        options: ["Carry oxygen", "Clot blood", "Fight infections", "Transport hormones"],
        correct: 2
    },
    {
        question: "Which part of the eye controls the amount of light entering?",
        options: ["Cornea", "Iris", "Lens", "Retina"],
        correct: 1
    },
    {
        question: "Which tissue connects muscles to bones?",
        options: ["Cartilage", "Ligament", "Tendon", "Marrow"],
        correct: 2
    },
    {
        question: "What is the function of the large intestine?",
        options: ["Digestion", "Absorb nutrients", "Water absorption", "Filter blood"],
        correct: 2
    },
    {
        question: "What is the scientific name of humans?",
        options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Pan troglodytes"],
        correct: 1
    },
    {
        question: "Which part of the cell contains the genetic material?",
        options: ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
        correct: 0
    },
    {
        question: "Which plant part is responsible for reproduction?",
        options: ["Leaf", "Stem", "Flower", "Root"],
        correct: 2
    },
    {
        question: "Which vitamin helps in blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
        correct: 2
    },
    {
        question: "What is the name of the pigment that gives skin its color?",
        options: ["Keratin", "Melanin", "Collagen", "Elastin"],
        correct: 1
    },
    {
        question: "Which organ removes carbon dioxide from the blood?",
        options: ["Liver", "Heart", "Lungs", "Kidneys"],
        correct: 2
    },
    {
        question: "Which organ system transports nutrients and gases?",
        options: ["Digestive", "Nervous", "Circulatory", "Respiratory"],
        correct: 2
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correct: 2
    },
    {
        question: "What is the structural and functional unit of the kidney?",
        options: ["Neuron", "Nephron", "Axon", "Alveoli"],
        correct: 1
    },
    {
        question: "Which part of the nervous system includes the brain and spinal cord?",
        options: ["Central nervous system", "Peripheral nervous system", "Autonomic system", "Somatic system"],
        correct: 0
    },
    {
        question: "Which element is essential for making hemoglobin?",
        options: ["Calcium", "Iron", "Sodium", "Potassium"],
        correct: 1
    },
    {
        question: "What process converts glucose into energy in cells?",
        options: ["Photosynthesis", "Respiration", "Digestion", "Osmosis"],
        correct: 1
    },
    {
        question: "Which disease is caused by a deficiency of insulin?",
        options: ["Hypertension", "Cancer", "Diabetes", "Anemia"],
        correct: 2
    },
    {
        question: "What is the function of platelets?",
        options: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
        correct: 2
    },
    {
        question: "Which organ breaks down toxins and produces bile?",
        options: ["Stomach", "Liver", "Pancreas", "Kidney"],
        correct: 1
    },
    {
        question: "Which organism is used in the production of alcohol?",
        options: ["Fungi", "Yeast", "Bacteria", "Virus"],
        correct: 1
    },
    {
        question: "What is the female reproductive organ in a flower called?",
        options: ["Stamen", "Anther", "Carpel", "Filament"],
        correct: 2
    },
    {
        question: "Which gas is exhaled during respiration?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
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