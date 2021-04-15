'use strict';

const userPhoto = document.getElementById('user-photo');
const username = document.getElementById('user-name');
const userpro = document.getElementById('user-pro');
const review = document.getElementById('review');
const surpriseBtn = document.getElementById('surprise');

// Fetch info

async function getData() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  userPhoto.src = `${user.picture.large}`;
  username.innerHTML = `${user.name.first} ${user.name.last}`;
  userpro.innerHTML = `Location: ${user.location.city}`;
}

async function randomFact() {
  const res = await fetch(
    'https://uselessfacts.jsph.pl//random.json?language=en'
  );
  const data = await res.json();
  console.log(data.text);
  review.innerHTML = `${data.text}`;
}

function init() {
  randomFact();
  getData();
}

init();

surpriseBtn.addEventListener('click', init);
