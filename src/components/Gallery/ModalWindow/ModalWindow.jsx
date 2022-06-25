import React, { useEffect } from "react";

export default function ModalWindow({
  closeModal,
  goLeft,
  goRight,
  imgSrc,
  imgAlt,
}) {
  useEffect(() => {
    window.addEventListener("keydown", onWindowKeyEvent);
    return () => {
      window.removeEventListener("keydown", onWindowKeyEvent);
    };
  }, []);

  const onWindowKeyEvent = (event) => {
    if (event.code === "Escape") {
      closeModal();
      return;
    }
    if (event.code === "ArrowLeft") {
      goLeft();
    } else if (event.code === "ArrowRight") {
      goRight();
    }
  };

  const onBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const onBtnClick = () => {
    closeModal();
  };

  return (
    <div className="lightbox is-open">
      <div className="lightbox__overlay" onClick={onBackDropClick}></div>

      <div className="lightbox__content">
        <img className="lightbox__image" src={imgSrc} alt={imgAlt} />
      </div>

      <button
        type="button"
        className="lightbox__button"
        onClick={onBtnClick}
      ></button>
    </div>
  );
}
