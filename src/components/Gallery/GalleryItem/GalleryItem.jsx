import React from "react";

export default function GalleryItem({
  altDescription,
  srcPreview,
  onImageClick,
  dataIndex,
}) {
  return (
    <li className="gallery__item">
      <img
        className="gallery__image"
        src={srcPreview}
        alt={altDescription}
        onClick={() => onImageClick(dataIndex)}
      />
    </li>
  );
}
