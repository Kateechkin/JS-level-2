const block = document.querySelector('.text-container');
const replaceButton = document.querySelector('#enter');
const replaceButton1 = document.querySelector('#enter2');

replaceButton.addEventListener('click', () => {
    // block.textContent = block.textContent.replace(/'/g, '"');
    block.textContent = block.textContent.replace(/\s'|'\s/g, '"');
});
replaceButton1.addEventListener('click', () => {
    block.textContent = block.textContent.replace(/"/g, '');
});