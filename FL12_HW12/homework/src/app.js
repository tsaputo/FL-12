const root = document.getElementById('root');
const modifyPage = document.getElementById('create');
const editPage = document.getElementById('edit');
const ZERO = 0;

window.addEventListener('hashchange', renderPages);

function showMainPage() {
    location.hash = 'main';
}

function showCreatePage() {
    location.hash = 'create';
    let termContainers = document.getElementsByClassName('termContainer');
    for (let i = 0; i < termContainers.length; i++) {
        termContainers[i].innerHTML = '';
    }
}

function showEditPage() {
    let element = document.getElementsByClassName('setEditContainer')[ZERO];
    if (element) {
        element.remove();
    }
    location.hash = 'edit';
}

window.onload = function () {
    renderPages();
    renderModifyPage(modifyPage);
    // renderEditPage(editPage);
};


function renderPages() {

    document.getElementById('main').style.display = 'none';
    document.getElementById('create').style.display = 'none';
    document.getElementById('edit').style.display = 'none';

    if (location.hash === '#main') {
        document.getElementById('main').style.display = 'block';
        renderMainPage();
    } else if (location.hash === '#create') {
        document.getElementById('create').style.display = 'block';
    } else {
        document.getElementById('edit').style.display = 'block';
    }
}


function renderMainPage() {

    let element = document.getElementsByClassName('setsContainer')[ZERO];
    if (element) {
        element.remove();
    }

    const setsContainer = document.createElement('div');
    setsContainer.className = 'setsContainer';

    document.getElementById('main').appendChild(setsContainer);

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (!key.startsWith('set_')) {
            continue;
        }

        const oneSetContainer = document.createElement('div');
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.addEventListener('click', function () {
            showEditPage();
            renderEditPage(editPage, key);
        });
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', function () {
            localStorage.removeItem(key);
            renderMainPage();
        });
        let valueObj = JSON.parse(localStorage.getItem(key));
        oneSetContainer.innerHTML = valueObj.name;
        oneSetContainer.appendChild(editButton);
        oneSetContainer.appendChild(removeButton);
        setsContainer.appendChild(oneSetContainer);

    }
}

function renderModifyPage(el) {
    const setContainer = document.createElement('div');
    setContainer.id = 'setContainer';
    const nameInput = document.createElement('input');
    const addTermButton = document.createElement('button');
    const saveSetButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    el.appendChild(setContainer);
    setContainer.appendChild(nameInput);
    nameInput.id = 'nameInput';
    setContainer.appendChild(addTermButton).innerHTML = 'Add term';
    setContainer.appendChild(saveSetButton).innerHTML = 'Save terms';
    setContainer.appendChild(cancelButton).innerHTML = 'Cancel';

    saveSetButton.addEventListener('click', saveToLocalStorage);

    addTermButton.addEventListener('click', renderTermInput);

    cancelButton.addEventListener('click', function () {
        location.hash = '#main';
    });


}

function renderTermInput() {
    const setContainer = document.createElement('div');
    const termContainer = document.createElement('div');
    termContainer.className = 'termContainer';
    const termInput = document.createElement('input');
    termInput.className = 'termInput';
    const definitionInput = document.createElement('input');
    definitionInput.className = 'definitionInput';
    const removeTermButton = document.createElement('button');
    setContainer.appendChild(termContainer);
    termContainer.appendChild(termInput).defaultValue = 'Term';
    termContainer.appendChild(definitionInput).defaultValue = 'Definition';
    termContainer.appendChild(removeTermButton).innerHTML = 'remove';

    removeTermButton.addEventListener('click', function () {
        termContainer.remove();
    });
}

function renderEditPage(el, key) {

    let valueObj = JSON.parse(localStorage.getItem(key));

    const setEditContainer = document.createElement('div');
    setEditContainer.className = 'setEditContainer';
    const nameInput = document.createElement('input');
    const addTermButton = document.createElement('button');
    const saveSetButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    el.appendChild(setEditContainer);
    setEditContainer.appendChild(nameInput).defaultValue = valueObj.name;
    nameInput.id = 'newNameInput';

    setEditContainer.appendChild(addTermButton).innerHTML = 'Add term';
    setEditContainer.appendChild(saveSetButton).innerHTML = 'Save terms';
    setEditContainer.appendChild(cancelButton).innerHTML = 'Cancel';



    addTermButton.addEventListener('click', renderTermInput);

    for (let i = 0; i < valueObj.terms.length; i++) {
        const termContainer = document.createElement('div');
        termContainer.className = 'termContainer';
        const termInput = document.createElement('input');
        termInput.className = 'termEditInput';
        const definitionInput = document.createElement('input');
        definitionInput.className = 'definitionInput';
        const removeThisTermButton = document.createElement('button');
        setEditContainer.appendChild(termContainer);
        termContainer.appendChild(termInput).defaultValue = valueObj.terms[i].term;
        termContainer.appendChild(definitionInput).defaultValue = valueObj.terms[i].definition;
        termContainer.appendChild(removeThisTermButton).innerHTML = 'remove';
        removeThisTermButton.addEventListener('click', function () {
            termContainer.remove();
        });
    }

    saveSetButton.addEventListener('click', saveToStorage);

    function saveToStorage() {
        this.key = key;
        let value = {};
        value.name = document.getElementById('newNameInput').value;
        value.terms = [];

        let termInputs = document.getElementsByClassName('termEditInput');

        for (let i = 0; i < termInputs.length; i++) {
            let termDef = {};
            termDef.term = termInputs[i].value;
            termDef.definition = document.getElementsByClassName('definitionInput')[i].value;
            value.terms.push(termDef);
        }

        let stringValue = JSON.stringify(value);

        if (value.name) {
            localStorage.setItem(key, stringValue);
        } else {
            alert('Please, fill the name!');
        }

        location.hash = '#main';
    }
    // addTermButton.addEventListener('click', renderTermInput);

    cancelButton.addEventListener('click', function () {
        location.hash = '#main';
    });
}


function saveToLocalStorage() {

    let value = {};
    value.name = document.getElementById('nameInput').value;
    value.terms = [];


    for (let i = 0; i < document.getElementsByClassName('termInput').length; i++) {
        let termDef = {};
        termDef.term = document.getElementsByClassName('termInput')[i].value;
        termDef.definition = document.getElementsByClassName('definitionInput')[i].value;
        value.terms.push(termDef);
    }

    let stringValue = JSON.stringify(value);

    let id = Number(localStorage.getItem('lastId')) + 1;
    localStorage.setItem('lastId', id);

    if (value.name) {
        localStorage.setItem(`set_${id}`, stringValue);
    } else {
        alert('Please, fill the name!');
    }

    location.hash = '#main';
}












