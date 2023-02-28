let url = 'https://randomuser.me/api/';

fetch( url )
    .then(response => response.json())
    .then( data => userData(data.results))
    .catch( error => console.log(error))

const userData = (data) => {
    user = data[0];
    console.log(user);
    document.querySelector('title').innerHTML = `${user.name.first} ${user.name.last} CV`;
    
    document.getElementById('photo').src = user.picture.large;

    document.getElementById('name').innerHTML = `${user.name.first} ${user.name.last}`;
    document.getElementById('age').innerHTML = `${user.dob.age}`;

    document.getElementById('email').innerHTML = `${user.email}`;
    document.getElementById('telefono').innerHTML = `${user.phone}`;
    document.getElementById('localidad').innerHTML = `${user.location.city}, ${user.location.state}, ${user.location.country}.`;
}



