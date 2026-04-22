// База питань (можеш змінити або додати свої)
const quizData = [
    {
        question: "1. Яка мова використовується для структурування та розмітки веб-сторінок?",
        options: ["Python", "HTML", "C++", "JavaScript"],
        correct: 1
    },
    {
        question: "2. Що з переліченого відповідає за візуальне оформлення (кольори, відступи) сайту?",
        options: ["CSS", "HTML", "PHP", "Бази даних"],
        correct: 0
    },
    {
        question: "3. Яка комп'ютерна деталь тимчасово зберігає дані під час роботи програм (ОЗП)?",
        options: ["Жорсткий диск", "Материнська плата", "Оперативна пам'ять", "Процесор"],
        correct: 2
    },
    {
        question: "4. Яке правило ергономіки є ключовим для веб-сторінок?",
        options: ["Якомога більше яскравих кольорів", "Зручна навігація та читабельний текст", "Музика, що грає автоматично", "Дуже дрібний шрифт для економії місця"],
        correct: 1
    }
];

const quizContainer = document.getElementById('quiz_container');
let quizHTML = '';

// Генерація HTML для тесту
quizData.forEach((q, index) => {
    quizHTML += `<div class="question-container">
                    <div class="question">${q.question}</div>
                    <div class="options">`;
    
    q.options.forEach((opt, optIndex) => {
        quizHTML += `<label>
                        <input type="radio" name="q${index}" value="${optIndex}">
                        ${opt}
                     </label>`;
    });
    
    quizHTML += `</div></div>`;
});

quizHTML += `<button id="submit-btn" onclick="checkAnswers()">Завершити тест</button>
             <div id="result"></div>`;

quizContainer.innerHTML = quizHTML;

// Функція перевірки результатів
function checkAnswers() {
    let score = 0;
    
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById('result');
    const percentage = (score / quizData.length) * 100;
    
    resultDiv.innerHTML = `Ваш результат: <b>${score}</b> з <b>${quizData.length}</b> правильних відповідей (${percentage}%).`;
    
    // Блокування кнопки після здачі
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').style.backgroundColor = 'gray';
}