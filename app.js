// Set the API endpoint URL and parameters
const endpointUrl = "https://api.flickr.com/services/rest";
const apiKey = "d7ad27bfed2e61d94d1a55c475a45dd6";
const method = "flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s";
const perPage = 20;

// Make a GET request to the API endpoint using fetch
fetch(`${endpointUrl}?method=${method}&api_key=${apiKey}&per_page=${perPage}&format=json&nojsoncallback=1`)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Process the data and display the photos on the page
    const photos = data.photos.photo;
    photos.forEach(photo => {
      const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      document.body.appendChild(imageElement);
    });
  })
  .catch(error => console.error(error)); // Handle any errors

