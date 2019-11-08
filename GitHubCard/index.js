/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


  
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['JRodDvlpr', 'msteele11101', 'alesslongaretti', 'ianpaulfo', 'Heart8reak',];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cardCreator = (user) => {

  // Create Elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const realName = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');


  // Element Content
  userImg.src = user.avatar_url;
  realName.textContent = `${user.name}`;
  userName.textContent = `Username: ${user.login}`;
  location.textContent = `Location: ${user.location}`;
  profLink.href = user.html_url;
  profLink.textContent = `${user.html_url}`;
  profLink.target = '_blank';
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;


  // Nesting of Elements
  card.appendChild(userImg);
  card.appendChild(cardInfo);

  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(profLink);
  

  // Set Class Names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');

  // Return Card
  return card;
};



// Build and Show My Card
const cards = document.querySelector('.cards');
axios
  .get('https://api.github.com/users/Adrian-Guadalupe')
  .then(response => {
    const myCard = cardCreator(response.data);
    cards.appendChild(myCard);
  })
  .catch(err => {
    console.log('data not returned', err)
  });


  // Build and Show Follower Cards
  followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      const followerCards = cardCreator(response.data);
      cards.appendChild(followerCards);
    })
  });
  




  
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/







  