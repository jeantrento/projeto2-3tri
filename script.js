// script.js
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const grade = parseFloat(document.getElementById('grade').value);
    const result = document.getElementById('result');
    
    if (isNaN(grade)) {
        result.textContent = 'Insira uma média válida!';
        result.style.color = 'red';
        return;
    }

    if (grade >= 60) {
        result.textContent = 'Aprovado!';
        result.style.color = '#ff9800'; /* laranja */
    } else {
        result.textContent = 'Reprovado!';
        result.style.color = 'red';
    }
});
