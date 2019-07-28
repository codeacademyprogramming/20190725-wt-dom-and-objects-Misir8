'use strict';
let students = [];
let tableItem = '';



function Student(name, surname, email, birthday ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
    this.scores = [];

}

let btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', addTable);

function addTable() {
    let name = document.querySelector('.student-name').value;
    let nameNode = document.createTextNode(name);


    let surname = document.querySelector('.student-surname').value;
    let surnameNode = document.createTextNode(surname);

    let email = document.querySelector('.student-email').value;
    let emailNode = document.createTextNode(email);

    let birthday = document.querySelector('.student-birthday').value;
    let birthdayNode = document.createTextNode(birthday);

    let tdName = document.createElement('td');
    tdName.appendChild(nameNode);

    let tdSurname = document.createElement('td');
    tdSurname.appendChild(surnameNode);

    let tdEmail = document.createElement('td');
    tdEmail.appendChild(emailNode);

    let tdBirthday = document.createElement('td');
    tdBirthday.appendChild(birthdayNode);

    let tr = document.createElement('tr');

    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBirthday);


    let table = document.querySelector('.table');
    table.appendChild(tr);

    document.querySelector('.student-name').value ='';
    document.querySelector('.student-surname').value ='';
    document.querySelector('.student-email').value ='';
    document.querySelector('.student-birthday').value ='';

}