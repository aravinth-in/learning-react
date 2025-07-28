import ReactDOM from 'react-dom'; // Import ReactDOM to use createPortal

// Get the DOM node where the modal will be rendered
// This assumes you've added <div id="modal-root"></div> to public/index.html
const modalRoot = document.getElementById('modal-root');


const Modal = ({ children, onClose }) => {
  // createPortal takes two arguments:
  // 1. The JSX (children) to be rendered.
  // 2. The DOM element to which the children should be attached.
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000 // Ensure it's on top of other content
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        position: 'relative' // For absolute positioning of close button
      }}>
        {children} {/* Render whatever JSX is passed as children to the Modal */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '1.5em',
            cursor: 'pointer',
            color: '#aaa'
          }}
        >
          &times; {/* HTML entity for 'x' */}
        </button>
      </div>
    </div>,
    modalRoot // This is the target DOM node for the portal
  );
};

export default Modal;