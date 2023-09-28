import { useState } from "react";
import "./App.css";
import searchImages from "./api";
import SearchHeader from "./components/SearchHeader";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
