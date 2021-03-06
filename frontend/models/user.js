class User {
  static all = [];

  constructor(user) {
    this.username = user.username;
    this.id = user.id;
    this.cars = user.cars;
    User.all.push(this);
  }

  static loadUsers() {
    User.all = [];
    API.getUsers().then((users) => {
      users.forEach((user) => new User(user));
      User.renderUsers();
    });
  }

  static renderUsers() {
    User.all.forEach((user) => {
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

      mainHTML.appendChild(div);

      user.renderCars();
    });
  }

  renderCars() {
    this.cars.forEach((car) => {
      const h3 = document.getElementById(`${car.user_id}`);

      const ul = document.createElement('ul');
      const liMake = document.createElement('li');
      const liModel = document.createElement('li');
      const liYear = document.createElement('li');
      const liTrim = document.createElement('li');

      ul.setAttribute('id', car.id);
      liMake.innerText = `Manufacturer: ${car.make}`;
      liModel.innerText = `Model: ${car.model}`;
      liYear.innerText = `Year: ${car.year}`;
      liTrim.innerText = `Trim: ${car.trim}`;
      liTrim.setAttribute('id', car.id);

      ul.appendChild(liYear);
      ul.appendChild(liMake);
      ul.appendChild(liModel);
      ul.append(liTrim);

      h3.appendChild(ul);
    });
  }

  static renderCarForm() {
    const newUserForm = document.getElementById('new-user-form');
    newUserForm.innerHTML = '';

    const h2 = document.querySelector('h2');
    h2.innerText = 'Please Fill in the Form Below!';

    mainHTML.innerHTML = `<form id="new-car">
        <label for="users"> Select the user you'd like to add a car to: </label>
        <select name="users" id="select-users-id">
        ${User.all.map(
          (user) => `<option value=${user.id}> ${user.username} </option>`
        )}
        </select>
        <br></br>
        <label for="year">Year: </label>
        <input type="text" id="year" name="year"></input>
        <br></br>
        <label for="make">Make: </label>
        <input type="text" id="make" name="make"></input>
        <br></br>
        <label for="model">Model: </label>
        <input type="text" id="model" name="model"></input>
        <br></br>
        <label for="trim">Trim: </label>
        <input type="text" id="trim" name="trim"></input>
        <br></br>
        <input type="submit" name="submit" value="Add New Car" class="submit">
        </form>`;

    const newCarForm = document.getElementById('new-car');
    newCarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      API.postNewCar(e);
    });
  }

  static renderCar(carObj) {
    const newCarForm = document.getElementById('new-car');
    newCarForm.innerHTML = '';

    const h3 = document.createElement('h3');

    h3.setAttribute('id', `${carObj.user_id}`);
    h3.innerHTML = `Username: ${carObj.user.username}`;

    mainHTML.appendChild(h3);

    const ul = document.createElement('ul');
    const liMake = document.createElement('li');
    const liModel = document.createElement('li');
    const liYear = document.createElement('li');
    const liTrim = document.createElement('li');

    ul.setAttribute('id', carObj.id);
    liMake.innerText = `Manufacturer: ${carObj.make}`;
    liModel.innerText = `Model: ${carObj.model}`;
    liYear.innerText = `Year: ${carObj.year}`;
    liTrim.innerText = `Trim: ${carObj.trim}`;

    ul.appendChild(liYear);
    ul.appendChild(liMake);
    ul.appendChild(liModel);
    ul.append(liTrim);

    h3.appendChild(ul);

    const h2 = document.querySelector('h2');
    h2.innerText = 'Here is the car you just added';
  }

  renderGarage() {
    mainHTML.innerHTML = '';

    const h3 = document.createElement('h3');
    h3.setAttribute('id', this.id);
    h3.innerText = `${this.username}'s Garage`;

    const userDeleteButton = document.createElement('button');
    userDeleteButton.setAttribute('value', this.id);
    userDeleteButton.innerText = `Delete ${this.username}`;
    userDeleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      API.deleteUser(e.target.value);
    });

    h3.appendChild(userDeleteButton);

    mainHTML.appendChild(h3);

    this.renderCars();

    this.cars.map((car) => {
      let dltBtn = document.createElement('button');
      dltBtn.innerText = 'Delete Car';
      dltBtn.setAttribute('value', `${car.id}`);
      dltBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let id = e.target.value;
        let deletedCar = document.getElementById(id);

        API.deleteCar(id);
        deletedCar.innerHTML = '';
      });
      let liTrim = document.getElementById(car.id);
      liTrim.appendChild(dltBtn);
    });
  }
}
