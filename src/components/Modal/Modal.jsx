import './Modal.css';

function Modal({ setOpen, content }) {
  const display = setOpen ? 'flex' : 'none';
  const styles = { display: display };

  return (
    <div id="modal" style={styles}>
      {content}
    </div>
  );
}

export default Modal;
