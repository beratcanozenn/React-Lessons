import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({ images }) => {
  return (
    <div className="imageList">
      {images.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
