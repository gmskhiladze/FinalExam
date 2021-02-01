var users;

// generate url
function getUrl() {
    const numOfUsers = 10;
    const api = `https://randomuser.me/api/?results=${numOfUsers}`;
    return api;
}

//fetch url
async function getData() {
    const url = getUrl();
    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            mode: 'no-cors'
        }
    })
        .then(response => response.json())
        .then(result => {
            processInfo(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// get user details
function processInfo(res) {
    users = Object.values(res)[0];

    let usersInfo = [];

    for (const user of users) {
        usersInfo.push([user.picture.medium, user.name.first, user.name.last, user.dob.date, user.location.city, user.location.country, user.cell]);
    }

    display(usersInfo);
}

// display users in dom
function display(userdata) {
    userdata.forEach(el => {
        const area = document.querySelector("#container");
        area.innerHTML += `
        <div id="container" class="container">
            <div class="card" style="width: 18rem;">
                <img src=${el[0]} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">FirstName: <span>${el[1]}</span></h5>
                    <h5 class="card-title">LastName: <span>${el[2]}</span></h5>
                    <h5 class="card-title">DOB: <span>${el[3]}</span></h5>
                    <h5 class="card-title">City: <span>${el[4]}</span></h5>
                    <h5 class="card-title">Country: <span>${el[5]}</span></h5>
                    <button type="button" id="copy" onclick="copyjson(this.value)" value="${el[6]}" class="btn btn-primary">Copy JSON</button>
                </div>
            </div>
        </div>`;
    });
}

// copy user object
function copyjson(id) {
    users.forEach(user => {
        if (user.cell == id) {
            //dakopireba vervnaxe ranairadaa arada users daikopireb da vso egari 
            document.execCommand(user);
        }
    });
}

// getData();