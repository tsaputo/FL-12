fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {
		// we got users
		let usersTable = document.getElementById('users');
		for (let user of users) {
			let userRow = document.createElement('tr');

			userRow.appendChild(createAvatarColumn(user));
			userRow.appendChild(createColumn('name', user.name));
			userRow.appendChild(createColumn('username', user.username));
			userRow.appendChild(createColumn('email', user.email));
			userRow.appendChild(createColumn('address', user.address.city));
			userRow.appendChild(createColumn('phone', user.phone));
			userRow.appendChild(createColumn('website', user.website));
			userRow.appendChild(createColumn('company', user.company.name));
			userRow.appendChild(createColumnWithButtons(user));

			let userInput = userRow.querySelector('input[name="name"]');
			userInput.onclick = function() {
				if (this.getAttribute('readonly')) {
					location.href = `posts.html?userId=${user.id}`;
				}
			}

			usersTable.appendChild(userRow);

		}
	});

function createAvatarColumn(user) {
	let column = document.createElement('td');

	let img = document.createElement('img');
	img.classList.add('avatar');
	img.setAttribute('src', `https://cataas.com/cat?width=50&id=${user.id}`);

	column.appendChild(img);

	return column;
}


function createColumn(name, content) {
	let column = document.createElement('td');

	let input = document.createElement('input');
	input.setAttribute('readonly', 'readonly');
	input.setAttribute('name', name);
	input.value = content;

	column.appendChild(input);

	return column;
}

function createColumnWithButtons(user) {
	let column = document.createElement('td');

	// delete button
	let deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'Delete';
	deleteButton.setAttribute('name', 'delete');
	deleteButton.onclick = function () {
		let currentRow = this.closest('tr');
		showSpinner();

		fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, { method: 'DELETE' })
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				currentRow.remove();
				hideSpinner();

			});
	}

	// edit  button
	let editButton = document.createElement('button');
	editButton.innerHTML = 'Edit';
	editButton.setAttribute('name', 'edit');
	editButton.onclick = function () {
		let currentRow = this.closest('tr');
		currentRow.querySelectorAll('input').forEach(elem => { elem.removeAttribute('readonly') })

		this.style.display = 'none';
		deleteButton.style.display = 'none';

		// save  button
		let saveButton = document.createElement('button');
		saveButton.innerHTML = 'Save';
		saveButton.setAttribute('name', 'save');

		saveButton.onclick = function () {
			showSpinner();
			let currentRow = this.closest('tr');
			updateUser(currentRow, user);

			// send update request
			fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
				method: 'PUT',
				body: JSON.stringify(user)
			})
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}

					currentRow.querySelectorAll('input').forEach(elem => { elem.setAttribute('readonly', 'readonly') });
					hideSpinner();
				});

			editButton.style.display = 'inline-block';
			deleteButton.style.display = 'inline-block';
			this.remove();
			cancelButton.remove();

		}

		// cancel  button
		let cancelButton = document.createElement('button');
		cancelButton.innerHTML = 'Cancel';
		cancelButton.setAttribute('name', 'cancel');

		cancelButton.onclick = function () {
			let currentRow = this.closest('tr');

			currentRow.querySelectorAll('input').forEach(elem => { elem.setAttribute('readonly', 'readonly') });

			resetRowValues(currentRow, user);

			editButton.style.display = 'inline-block';
			deleteButton.style.display = 'inline-block';
			this.remove();
			saveButton.remove();
		}

		let currentColumn = this.closest('td');
		currentColumn.appendChild(cancelButton);
		currentColumn.appendChild(saveButton);

	}

	column.appendChild(editButton);
	column.appendChild(deleteButton);

	return column;
}

function showSpinner() {
	document.getElementById('overlay').style.display = 'block';
}

function hideSpinner() {
	document.getElementById('overlay').style.display = 'none';
}

function resetRowValues(row, user) {

	row.querySelector('input[name="name"]').value = user.name;
	row.querySelector('input[name="username"]').value = user.username;
	row.querySelector('input[name="email"]').value = user.email;
	row.querySelector('input[name="address"]').value = user.address.city;
	row.querySelector('input[name="phone"]').value = user.phone;
	row.querySelector('input[name="website"]').value = user.website;
	row.querySelector('input[name="company"]').value = user.company.name;
}

function updateUser(row, user) {

	user.name = row.querySelector('input[name="name"]').value;
	user.username = row.querySelector('input[name="username"]').value;
	user.email = row.querySelector('input[name="email"]').value;
	user.address.city = row.querySelector('input[name="address"]').value;
	user.phone = row.querySelector('input[name="phone"]').value;
	user.website = row.querySelector('input[name="website"]').value;
	user.company.name = row.querySelector('input[name="company"]').value;
}

function loadUserPosts() {

}

