import s from './ImageGalleryItem.module.css';

export const GalleryItem = ({ imgPrew, imgLarge, handlerOpenModal }) => {
  console.log(imgLarge);
  return (
    <li className={s.gallery__item}>
      <img
        className={s.gallery__pic}
        src={imgPrew}
        alt="img"
        onClick={() => handlerOpenModal(imgLarge)}
      />
    </li>
  );
};
