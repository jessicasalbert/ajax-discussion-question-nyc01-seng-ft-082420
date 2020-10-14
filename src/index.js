// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  clickHandler()
});


function clickHandler() {
  document.addEventListener("click", e => {
    if (e.target.matches(".btn")) {
      fetchPerson()
    }
  })
}

function fetchPerson() {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( res => renderPerson(res["results"][0]))
}

function renderPerson(person) {
  const name = `${person.name.title}. ${person.name.first} ${person.name.last}`
  const email = person.email
  const street = `${person.location.street.number} ${person.location.street.name}`
  const city = person.location.city
  const state = person.location.state
  const zip = person.location.postcode
  const phone = person.phone
  const cell = person.cell
  const dob = person.dob.date
  const pic = person.picture.large
  document.querySelector("#fullname").textContent = name
  document.querySelector("#email").textContent = email
  document.querySelector("#profile_picture").src = pic
  document.querySelector("#street").textContent = street
  document.querySelector("#city").textContent = city
  document.querySelector("#state").textContent = state
  document.querySelector("#postcode").textContent = zip
  document.querySelector("#phone").textContent = phone
  document.querySelector("#cell").textContent = cell
  document.querySelector("#date_of_birth").textContent = dob
  console.log(zip)
}
