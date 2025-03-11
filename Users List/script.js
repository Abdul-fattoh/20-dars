async function fetchUsersList() {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await responce.json()
    const usersList = document.querySelector("#usersList")

    for (let i = 0; i < data.length; i++) {
        usersList.insertAdjacentHTML("beforeend",   `<div class="userList">
                                                        <h2>${data[i].name}</h2>
                                                        <p>@${data[i].username}</p>
                                                        <p>${data[i].email}</p>
                                                        <p>${data[i].phone}</p>
                                                        <a href="${data[i].website}">${data[i].website}</a>
                                                        <p>${data[i].company.name}</p>
                                                    </div>`)
    }
}

fetchUsersList()