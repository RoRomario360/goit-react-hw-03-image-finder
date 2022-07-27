import { Component } from 'react';
import { RequestApi } from 'components/Api/ReguestApi';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export class ImageGallery extends Component {
  state = {
    images: [],
    totalHits: null,
    page: 1,
    status: STATUS.Idle,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: STATUS.Loading });
      RequestApi(this.props.query)
        .then(response => {
          const { data } = response;

          this.setState(prevState => ({
            images: [...data.hits],
            page: 2,
            totalHits: data.totalHits,
            status: STATUS.Success,
          }));
        })
        .catch(error => {
          this.setState({ status: STATUS.Error, error });
          toast.error('Something went wrong!');
        });
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === STATUS.Loading) {
      return <Loader />;
    }

    return (
      <>
        <ul className={s.galleryList}>
          {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <GalleryItem
                key={id}
                imgPrew={webformatURL}
                imgLarge={largeImageURL}
                handlerOpenModal={this.props.handlerOpenModal}
              />
            );
          })}
        </ul>

        <button type="button">Load more</button>
      </>
    );
  }
}
