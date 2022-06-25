import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import GalleryItem from "./GalleryItem";
import ModalWindow from "./ModalWindow";

import galleryItems from "./galleryItems.js";

let imageIndex = -2;

export default function Gallery() {
  let [isModalVisible, setIsModalVisible] = useState(false);
  let [bigImageSrc, setBigImageSrc] = useState("");
  let [bigImageAlt, setBigImageAlt] = useState("");
  let elementIndex = 0;
  
  const openModal = (idx) => {
    imageIndex = Number(idx);
    setBigImageSrc(galleryItems[imageIndex].original);
    setBigImageAlt(galleryItems[imageIndex].description);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setBigImageSrc("");
    setBigImageAlt("");
    imageIndex = -2;
  };

  const goToRight = () => {
    imageIndex += 1;
    if (imageIndex === galleryItems.length) {
      imageIndex = 0;
    }
    setBigImageSrc(galleryItems[imageIndex].original);
    setBigImageAlt(galleryItems[imageIndex].description);
  };

  const goToLeft = () => {
    imageIndex -= 1;
    if (imageIndex < 0) {
      imageIndex = galleryItems.length - 1;
    }
    setBigImageSrc(galleryItems[imageIndex].original);
    setBigImageAlt(galleryItems[imageIndex].description);
  };

  return (
    <>
      <ul className="gallery">
        {galleryItems.map(({ description, preview }) => (
          <GalleryItem
            key={uuidv4()}
            altDescription={description}
            srcPreview={preview}
            onImageClick={openModal}
            dataIndex={elementIndex++}
          />
        ))}
      </ul>
      {isModalVisible && (
        <ModalWindow
          closeModal={closeModal}
          goLeft={goToLeft}
          goRight={goToRight}
          imgSrc={bigImageSrc}
          imgAlt={bigImageAlt}
        />
      )}
    </>
  );
}
