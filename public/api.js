const apiurl = 'http://localhost:3000/users';

//GET users
async function fetchUsers() {
    try {
        const response = await fetch(apiurl);
        const users = await response.json();

        const ul = document.getElementById('userslist');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.id}: ${user.name}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

//POST: used to add new user
function adduser() {
    fetch(apiurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'Amara'})
    })
        .then(res => res.json())
        .then(data => alert('User added:' + JSON.stringify(data)));
}

//PUT: used to update new user details
function updateuser() {
    fetch(`${apiurl}/1`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: 'James Updated'})
    })
        .then(res => res.json())
        .then(data => alert('User updated:' + JSON.stringify(data)));
}

//DELETE: used to delete or remove user(rm -f)
function deleteuser() {
    fetch(`${apiurl}/2`, {
        method: 'DELETE'
    })
        .then(data => alert('User deleted'));
}
