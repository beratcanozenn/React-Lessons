import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID oXjWuXk_DZlaf9JvaX0Ncvtyr2Fr1fJrnWkg0llBwHk",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
