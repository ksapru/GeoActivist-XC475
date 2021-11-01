import React from "react";
 

// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <MDBFormInline className="md-form">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </MDBFormInline>
//     </MDBCol>
//   );
// }

// export default SearchPage;





export default function Searchbar(){


const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters'); // this is the json file 
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


    return(

        
        <form className = "form" action="/" method="get">
        <label htmlFor="header-search">
            
            <span className="visually-hidden">Search blog posts</span>
        </label>
        
        </form>


    );
}

