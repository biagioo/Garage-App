const baseUrl = 'http://localhost:3000';
const carsUrl = `${baseUrl}/cars`;
const usersUrl = `${baseUrl}/users`;
const mainHTML = document.querySelector('main');
const btnsDiv = document.getElementById('buttons');
const allGaragesBtn = document.getElementById('all-garages-btn');
const bodyHeaderH2 = document.querySelector('h2');

const sortBtn = document.createElement('button');

sortBtn.innerHTML = 'Sort';
sortBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mainHTML.innerHTML = '';
  renderSortedUser();
});
const renderSortedUser = () => {
  sortUsers().forEach((user) => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const garageBtn = document.createElement('button');

    garageBtn.innerText = 'View My Garage';
    garageBtn.setAttribute('value', `${user.id}`);
    garageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      API.loadUserGarage(e.target.value);
    });

    div.setAttribute('class', 'garage');
    div.setAttribute('id', user.id);

    h3.innerText = `${user.username}'s Garage`;

    div.appendChild(h3);
    div.appendChild(garageBtn);
    // div.appendChild(sortBtn)
    mainHTML.appendChild(div);

    user.renderCars();
  });
};

const sortUsers = () => {
  let newUserArr = [];

  User.all.map((user) => newUserArr.push(user));
  return newUserArr.sort(function (a, b) {
    var nameA = a.username.toUpperCase(); // ignore upper and lowercase
    var nameB = b.username.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
  });
};
document.addEventListener('DOMContentLoaded', () => {
  allGaragesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fakePageReload();
  });
});

const fakePageReload = () => {
  mainHTML.innerHTML = '';
  bodyHeaderH2.innerText = 'Here are All Current Garages';
  User.loadUsers();
  createNewCarBtn();
  createNewUserForm();
  mainHTML.appendChild(sortBtn);
};

const createNewCarBtn = () => {
  const newCarBtn = document.createElement('button');
  const findAddCarBtn = document.getElementById('add-car-btn');

  if (!findAddCarBtn) {
    newCarBtn.setAttribute('id', 'add-car-btn');
    newCarBtn.innerText = 'Add Car';
    newCarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      User.renderCarForm();
    });
    btnsDiv.appendChild(newCarBtn);
  }
};

const createNewUserForm = () => {
  const div = document.getElementById('new-user-form');
  div.innerHTML = `<form id="signup-form" class="add-user" action="index.html" method="post">
    <h3>Sign to Create Your garage:</h3>
    <input id="signup-field" type="text" name="username" value="" placeholder="username">
    <br><br>
    <input type="submit" name="submit" value="Submit" class="submit">
    <br><br>
    </form>`;

  const form = document.querySelector('.add-user');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    API.postNewUser(e);
    form.reset();
  });
};
