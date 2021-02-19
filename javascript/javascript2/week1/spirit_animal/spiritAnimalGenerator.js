const spiritAnimalName = ['Strong and Courageous Bear', 'The incredible butterfly',
    'The Patience Cat', 'The Innocent Deer',
    'The Friendly Dolphin', 'The Cunning Fox', 'The black Panter',
    'A German Shepherd', 'The Roar of a Lion', 'A well visionery Hawk'];
const input = document.getElementById('input');
const btn = document.getElementById('getSpirit');
const p = document.getElementById('spiritName');

input.addEventListener('input', function () {
    get(input.value, 'text');
});

input.addEventListener('mouseover', function () {
    get(input.value, 'hover');
});

btn.addEventListener('click', function () {
    get(input.value, 'click');
});

function get(value, selectedOption) {
    const arrName = Math.floor(Math.random() * spiritAnimalName.length);
    const option = document.getElementById('selectOption').value;
    if (!input.value || !selectedOption) {
        p.textContent = `Enter your name first and select an option`;
    } else if (option === selectedOption && value) {
        const inputName = value;
        p.textContent = `${inputName} - ${spiritAnimalName[arrName]}`;
        return p.textContent;
    }
}