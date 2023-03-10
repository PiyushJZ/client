import ReactDOM from 'react-dom';

const Modal = ({ modalData }) => {
  return ReactDOM.createPortal(
    <div
      onClick={modalData.onDismiss}
      className='ui dimmer modals visible active'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{modalData.title}</div>
        <div className='content'>{modalData.content}</div>
        <div className='actions'>{modalData.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
