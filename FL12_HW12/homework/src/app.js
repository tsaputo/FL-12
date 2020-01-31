const root = document.getElementById('root');
const createPage = document.getElementById('create');
const editPage = document.getElementById('edit');
const ZERO = 0;
const TWO = 2;
const FOUR = 4;
const NEG_ONE = -1;
const POS_ONE = 1;

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
    renderCreatePage(createPage);
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

    let set = localStorageDataSort(localStorage);
    for (let i = 0; i < set.length; i++) {
        let key = `set_${set[i].id}`;

        const oneSetContainer = document.createElement('div');
        oneSetContainer.id = 'oneSetContainer';
        oneSetContainer.onclick = function () {
            if (this.style.backgroundColor) {
                this.style.backgroundColor = '';
                // let storageObj = JSON.parse(localStorage.getItem(key));
                // storageObj.isChecked = false;
                // value = JSON.stringify(storageObj);
                // localStorage.setItem(key, value);
            } else {
                this.style.backgroundColor = '#09ba44';
                // let storageObj = JSON.parse(localStorage.getItem(key));
                // storageObj.isChecked =true;
                // value = JSON.stringify(storageObj);
                // localStorage.setItem(key, value);
            }

        }
            
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
        oneSetContainer.innerHTML = set[i].name;
        oneSetContainer.appendChild(editButton);
        oneSetContainer.appendChild(removeButton);
        setsContainer.appendChild(oneSetContainer);

    }
}

function renderCreatePage(el) {
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
    
    saveSetButton.addEventListener('click', saveToLocalStorage.bind(this, setContainer), false);

    addTermButton.addEventListener('click', renderTermInput.bind(this, setContainer), false);

    cancelButton.addEventListener('click', function () {
        location.hash = '#main';
    });

}

function renderTermInput(el) {
    const termContainer = document.createElement('div');
    termContainer.className = 'termContainer';
    const termInput = document.createElement('input');
    termInput.className = 'termInput';
    const definitionInput = document.createElement('input');
    definitionInput.className = 'definitionInput';
    const removeTermButton = document.createElement('button');
    el.appendChild(termContainer);
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


    for (let i = 0; i < valueObj.terms.length; i++) {
        const termContainer = document.createElement('div');
        termContainer.className = 'termContainer';
        const termInput = document.createElement('input');
        termInput.className = 'termEditInput';
        const definitionInput = document.createElement('input');
        definitionInput.className = 'definitionEditInput';
        const removeThisTermButton = document.createElement('button');
        setEditContainer.appendChild(termContainer);
        termContainer.appendChild(termInput).defaultValue = valueObj.terms[i].term;
        termContainer.appendChild(definitionInput).defaultValue = valueObj.terms[i].definition;
        termContainer.appendChild(removeThisTermButton).innerHTML = 'remove';
        removeThisTermButton.addEventListener('click', function () {
            termContainer.remove();
        });
    }
    saveSetButton.addEventListener('click', saveToLocalStorage.bind(this, setEditContainer, key), false);
    
    addTermButton.addEventListener('click', renderTermInput.bind(this, setEditContainer), false);

    cancelButton.addEventListener('click', function () {
        location.hash = '#main';
    });
}

function saveToLocalStorage(el, key) {
    let inputs = el.querySelectorAll('input');
    let value = {};
    value.name = inputs[ZERO].value;
    value.isChecked = false;
    value.terms = [];


    for (let i = 1; i < inputs.length; i++) {
        let termDef = {};
            if(!i%TWO === ZERO) {
                termDef.term = inputs[i].value;
                termDef.definition = inputs[++i].value;
            }              
        value.terms.push(termDef);
    }

    let stringValue = JSON.stringify(value);
    if (localStorage.getItem(key) !== null) {
        if (value.name) {
            localStorage.setItem(key, stringValue);
        } else {
            alert('Please, fill the name!');
        }
    } else {
    
    let id = Number(localStorage.getItem('lastId')) + 1;
    localStorage.setItem('lastId', id);

    if (value.name) {
        localStorage.setItem(`set_${id}`, stringValue);
    } else {
        alert('Please, fill the name!');
    }

}
    location.hash = '#main';
}


function localStorageDataSort() { 
    let set = [];
    const checkedSet = [];
    
	
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('set_')) {
            let obj = JSON.parse(localStorage.getItem(key));
            obj.id = localStorage.key(i).slice(FOUR);
            if (!obj.isChecked) {
                set.push(obj);
            } else {
                checkedSet.push(obj);
            }
        }
    }

    
    set.sort(function (a, b) {
        if (a.id > b.id) {
        return 1;
        }
        if (a.id < b.id) {
        return NEG_ONE;
        }
        return ZERO;
    });

set = set.concat(checkedSet);
return set;
}




