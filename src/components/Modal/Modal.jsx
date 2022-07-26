import { Component } from 'react';
import s from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.modalOpen);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalOpen);
  }

  modalOpen = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlerBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handlerBackDrop}>
        <div class={s.modal}>
          <img src={this.props.image} alt="image" />
        </div>
      </div>
    );
  }
}
