document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("fetch-apod")
    .addEventListener("click", () => fetchAPOD());
  document
    .getElementById("fetch-rover-photos")
    .addEventListener("click", () => fetchRoverPhotos());
  document
    .getElementById("fetch-neo-data")
    .addEventListener("click", () => fetchNEOData());
  document
    .getElementById("search-button")
    .addEventListener("click", () => searchAPOD());
});

const API_KEY = "YOUR API KEY HERE"; // Replace with your NASA API key

// fetches astronomy photo of the day with caption
function fetchAPOD() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("apod-result").innerHTML = `
                <h3>${data.title}</h3>
                <img src="${data.url}" alt="${data.title}">
                <p>${data.explanation}</p>
            `;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// fetches most recent photos from the Mars Rover Perseverance
function fetchRoverPhotos() {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const photos = data.latest_photos;
      let photosHTML = "";
      photos.forEach((photo) => {
        photosHTML += `<img src="${photo.img_src}" alt="Mars Rover Photo">`;
      });
      document.getElementById("rover-photos-result").innerHTML = photosHTML;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// fetches a list of near-Earth objects (NEOs) - names and whether each object is potentially hazardous
function fetchNEOData() {
  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const neos = data.near_earth_objects;
      let neosHTML = "<ul>";
      neos.forEach((neo) => {
        neosHTML += `<li>${neo.name} - Potentially Hazardous: ${
          neo.is_potentially_hazardous_asteroid ? "Yes" : "No"
        }</li>`;
      });
      neosHTML += "</ul>";
      document.getElementById("neo-data-result").innerHTML = neosHTML;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// allows users to search for the APOD of a specific date
function searchAPOD() {
  const date = document.getElementById("search-input").value;
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("search-result").innerHTML = `
                <h3>${data.title}</h3>
                <img src="${data.url}" alt="${data.title}">
                <p>${data.explanation}</p>
            `;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
