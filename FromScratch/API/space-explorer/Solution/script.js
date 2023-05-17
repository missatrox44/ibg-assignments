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
      const randomPhotos = getRandomElements(photos, 14); // Get 14 random photos
      let photosHTML = "";
      randomPhotos.forEach((photo) => {
        const { img_src, earth_date } = photo;
        photosHTML += `
            <div class="rover-photo">
              <img src="${img_src}" alt="Mars Rover Photo">
              <p>${earth_date}</p>
            </div>`;
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

// Helper function to get a specified number of random elements from an array
function getRandomElements(array, numElements) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numElements);
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
      let neosHTML = `
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size (meters)</th>
                <th>Velocity (km/h)</th>
                <th>Potential Hazard</th>
              </tr>
            </thead>
            <tbody>`;

      const neoPromises = neos.map((neo) => {
        const detailedUrl = neo.links.self;
        return fetch(detailedUrl).then((response) => response.json());
      });

      Promise.all(neoPromises)
        .then((detailedData) => {
          detailedData.forEach((detailedInfo, index) => {
            const neo = neos[index];
            const size =
              detailedInfo.estimated_diameter.meters.estimated_diameter_max.toFixed(
                2
              );
            const velocity =
              detailedInfo.close_approach_data[0].relative_velocity
                .kilometers_per_hour;
            neosHTML += `
                <tr>
                  <td>${neo.name}</td>
                  <td>${size}</td>
                  <td>${velocity}</td>
                  <td>${
                    neo.is_potentially_hazardous_asteroid ? "Yes" : "No"
                  }</td>
                </tr>`;
          });
          neosHTML += `
              </tbody>
            </table>`;
          document.getElementById("neo-data-result").innerHTML = neosHTML;
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
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
