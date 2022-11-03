// Your code here
const characterAPI = 'http://localhost:3000/characters';
const characterBar = document.getElementById('character-bar');
const detailedInfo = document.getElementById("detailed-info");
const namePar = document.getElementById("name");
const image = document.getElementById("image"); 
const voteCount = document.getElementById(("vote-count")); 
const voteForm = document.getElementById("votes-form"); 
const resetButton = document.querySelector('#reset-btn'); 
let currentCharacter; 

voteForm.addEventListener("submit", (e) => {
     e.preventDefault(); 
     currentCharacter.votes += parseInt(e.target.votes.value); 
     showInfo(currentCharacter); 
     resetButton.addEventListener('click', () => { 
        voteForm.reset(); 
    }) 
})

fetch(characterAPI)
 .then((res) => res.json())
 .then(renderCharacters); 
 
function renderCharacters(characters){ 
    characters.forEach(renderCharacter) 
}

function renderCharacter(character){ 
const characterSpan = document.createElement("span"); 
characterSpan.innerText = character.name; 
characterBar.append(characterSpan); 
characterSpan.addEventListener("click", () => { 
    currentCharacter = character; 
    showInfo(character); 
}); 
} 

function showInfo(character){ 
    namePar.innerText = character.name;
    image.src = character.image; 
    voteCount.innerText = character.votes; 
} 