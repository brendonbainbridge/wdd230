const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', function () {
    const item = input.value;
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);

        chaptersArray.forEach(chapter => {
            displayList(chapter);
        });

        });
        input.focus();
    } else {
        input.placeholder = 'please put in a actual scripture'
        alert('Please enter book and chapter')
    }
    input.value = '';
});








