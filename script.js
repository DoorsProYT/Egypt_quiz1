const start = document.getElementById('start');

const q1b1 = document.getElementById('1-1');
const q1b2 = document.getElementById('1-2');
const q1b3 = document.getElementById('1-3');

const q2b1 = document.getElementById('2-1');
const q2b2 = document.getElementById('2-2');
const q2b3 = document.getElementById('2-3');

const q3b1 = document.getElementById('3-1');
const q3b2 = document.getElementById('3-2');
const q3b3 = document.getElementById('3-3');

const rv = document.getElementById('result-value');
var result = parseInt(localStorage.getItem('res')) || 0;
const b_to_s = document.getElementById('back_to_start');

start?.addEventListener('click', function() {
    localStorage.setItem('res', 0); // ОБНУЛЯЕМ СЧЕТ ПЕРЕД НАЧАЛОМ
    window.location.href = 'quest1.html';
});


q1b1?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'quest2.html';
    
});
q1b2?.addEventListener('click', function() {
    alert('Правильно!');
    result++; // увеличиваем
    localStorage.setItem('res', result); // записываем в память
    window.location.href = 'quest2.html'; // только потом переходим
});
q1b3?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'quest2.html';
});


q2b1?.addEventListener('click', function() {
    alert('Правильно!');
    result++; // увеличиваем
    localStorage.setItem('res', result); // записываем в память
    window.location.href = 'quest3.html'; // только потом переходим
});
q2b2?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'quest3.html';
});
q2b3?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'quest3.html';
});


q3b1?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'result.html';
});
q3b2?.addEventListener('click', function() {
    alert('Не правильно!');
    window.location.href = 'result.html';
});
q3b3?.addEventListener('click', function() {
    alert('Правильно!');
    result++; // увеличиваем
    localStorage.setItem('res', result); // записываем в память
    window.location.href = 'result.html'; // только потом переходим
});


b_to_s?.addEventListener('click', function() {
    window.location.href = 'index.html'
});


document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, что мы на странице результата
    if (window.location.pathname.includes('result.html')) {
        // Получаем баллы из памяти
        const score = localStorage.getItem('res') || 0;
        // Задаем общее количество вопросов
        const total = 3; 

        // Находим элемент и меняем его текст на формат "балл/всего"
        const resultElement = document.getElementById('result-value');
        if (resultElement) {
            resultElement.textContent = score + ' / ' + total;
        }
    }
});
