
  const catalog = [
  {
    id: crypto.randomUUID(),
    title: "Avengers: Infinity War",
    imageUrl: "resources/AvengersInfinity.jpg",
    year: 2018,
    duration: 150,
    synopsis:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "Avengers: Age of Ultron",
    imageUrl: "resources/avengersUltron.jpg",
    year: 2015,
    duration: 141,
    synopsis:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "Thor",
    imageUrl: "resources/ThorDarkWorld.webp",
    year: 2011,
    duration: 115,
    synopsis:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "The flash(Tv Series)",
    imageUrl: "resources/Flash_serie.jpg",
    year: 2014,
    duration: 43,
    synopsis:
      "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "The flash(The Movie)",
    imageUrl: "resources/The_Flash_Movie.webp",
    year: 2023,
    duration: 144,
    synopsis:
      "Flash, the fastest man alive, travels to a timeline where Earth is in crisis and the rest of the heroes are lost or scattered.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "Mr. Robot",
    imageUrl: "resources/mr-robot.jpg",
    year: 2015,
    duration: 45,
    synopsis:
      "Elliot, a brilliant but unstable cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global chaos when he and his shadowy allies try to take down the corrupt corporation his company is paid to protect.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Dragon Ball Z",
    imageUrl: "resources/DragonBall.png",
    year: 1996,
    duration: 24,
    synopsis:
      "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Dragon Ball GT",
    imageUrl: "resources/DragonBallGT.jpg",
    year: 1996,
    duration: 24,
    synopsis:
      "After Goku is made a kid again by the Black Star Dragon Balls, he goes on a journey to get back to his old self.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Captain Tusabasa",
    imageUrl: "resources/Tsubasa.jpg",
    year: 2018,
    duration: 22,
    synopsis:
      "An 11-year-old Tsubasa Oozora started playing football at a very young age. To pursue his dream to the best of his elementary school abilities, he moved to Nankatsu, which is well-known for its excellent elementary school soccer teams.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Whisper of the heart",
    imageUrl: "resources/WhisperOfHeart.jpg",
    year: 1995,
    duration: 111,
    synopsis:
      "A love story between a girl who loves reading books and a boy who has previously checked out all of the library books she chooses.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Neon Genesis Evangelion",
    imageUrl: "resources/Evangelion.jpg",
    year: 1995,
    duration: 24,
    synopsis:
      "In a post-cataclysmic future, reluctant teen Shinji Ikari is called by his estranged father to pilot an Evangelion for NERV, humanity's last defense against invading Angels threatening Tokyo-3.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "Solo Leveling",
    imageUrl: "resources/soloLeveling.jpg",
    year: 2024,
    duration: 24,
    synopsis:
      "Follows the adventures of Sung Jinwoo in a world that is constantly threatened by monsters and evil forces. In his battles Sung transforms himself from the weakest hunter of all mankind to one of the strongest hunters in existence.",
    type: "Tv Series",
  },

  {
    id: crypto.randomUUID(),
    title: "X-Men: Days of Future Past",
    imageUrl: "resources/XmenDaysFuture.jpg",
    year: 2014,
    duration: 132,
    synopsis:
      "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "Fantastic Four: Rise of the Silver Surfer",
    imageUrl: "resources/fantasticFour.jpg",
    year: 2007,
    duration: 92,
    synopsis:
      "The Fantastic Four learn that they aren't the only super-powered beings in the universe when they square off against the powerful Silver Surfer and the planet-eating Galactus.",
    type: "Movie",
  },

  {
    id: crypto.randomUUID(),
    title: "Bruce lee: The Big Boss",
    imageUrl: "resources/BruceLeeKarate.jpg",
    year: 1971,
    duration: 115,
    synopsis:
      "A young Chinese man sworn an oath of non-violence moves to Thailand to work with his cousins in an ice factory, which he discovers to be a front for a sinister heroin-smuggling operation.",
    type: "Movie",
  },

   {
    id: crypto.randomUUID(),
    title: "Doraemon: nobita and the space heroes",
    imageUrl: "resources/portada_doraemon.webp",
    year: 2015,
    duration: 100,
    synopsis:
      "Nobita wishes to be a real hero. Doraemon uses his gadget, the Burger Director to make them a real Movie superhero. Aron saw the five powers and abilities and asks them to help him save his planet, the planet Pokkuru. After their journey to the planet, the gang thought it was only Burger's doing but realizing that it is not a Movie and they are actually fighting bad...",
    type: "Movie",
  },

   {
    id: crypto.randomUUID(),
    title: "Power Rangers",
    imageUrl: "resources/power-rangers.jpg",
    year: 1993,
    duration: 30,
    synopsis:
      "A team of teenagers are tasked with saving Angel Grove from the evil witch, Rita Repulsa, and later from Lord Zedd, Emperor of All He Sees, and his horde of monsters.",
    type: "Tv Series"
  },
];
 

const liveSearch = document.querySelector(".filter");
const messageResult = document.querySelector(".message");
const renderCatalog = document.querySelector(".catalog");

liveSearch.addEventListener("keyup", searchItem);

renderItems(catalog);

function searchItem(keyboardEvent) {

  
    const searchTerm = liveSearch.value.toLowerCase().trim();

    const result = catalog.filter((query) =>
      query.title.toLowerCase().includes(searchTerm),
    );
    
    if (result.length > 0) {
      renderItems(result);
    } else displayMessage("block");
 
}

function displayMessage(value) {
  
  messageResult.style.display = value;
  renderCatalog.innerHTML = "";
}


function renderItems(catalogItems) {

  renderCatalog.innerHTML = "";
  let html = "";
  displayMessage("none");

  
  html = catalogItems.map(item => 
  `<div class="card">
            <img src="${item.imageUrl}" />
            <p class="item-title">${item.title}</p>

            <div class="card-details">
                <p class="item-release-date">${item.year} </p>
                <p class="item-duration">${item.duration} min</p>
                <p class="item-type">${item.type}</p>
            </div>
          </div>`
  ).join("");

  renderCatalog.innerHTML = html;
 
}
