const mainCont = document.getElementById("row-div"); // row div selected;

// selecting the button for event listeners;

const searchBtn = document.getElementsByClassName("button")[0];

const eminemBtn = document.getElementsByClassName("btn-success")[0];

const metallicaBtn = document.getElementsByClassName("btn-secondary")[0];

const bohemothBtn = document.getElementsByClassName("btn-dark")[0];

// console.log(searchBtn);

// adding event listener click to each button;

searchBtn.addEventListener("click", () => {
  const searchResult = document.getElementById("search-bar").value;
  fetchImgs(searchResult);
});

eminemBtn.addEventListener("click", () => {
  fetchImgs("eminem");
});

metallicaBtn.addEventListener("click", () => {
  fetchImgs("metallica");
});

bohemothBtn.addEventListener("click", () => {
  fetchImgs("bohemoth");
});

const fetchImgs = (query) => {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e8b21a3ea8mshe2cb8e6ed080e8ep1a4adejsnb2a78a3ac4ea",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data.data[0]);
      const dataArray = data.data;
      renderImgs(dataArray);
    });
};

const renderImgs = (arrayData) => {
  arrayData.forEach((img) => {
    console.log(img.album.cover_big);
    const url = img.album.cover_big;
    const cardFrame = document.createElement("div");
    cardFrame.classList.add(
      "col-12",
      "col-md-4",
      "col-lg-3",
      "mr-2",
      "img-fluid"
    );
    cardFrame.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${url}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`;
    mainCont.appendChild(cardFrame);
  });
};
