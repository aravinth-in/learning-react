import { useState } from 'react';
import Modal from './Modal';

const PortalDemo = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#fdf3f8',
      textAlign: 'center',
      minHeight: '200px',
      position: 'relative', // To show how modal escapes parent overflow
      overflow: 'hidden'    // This would normally cut off a non-portal modal
    }}>
      <h2>React Portals Example</h2>
      <p>This content is inside the parent component's normal DOM flow.</p>

      <button
        onClick={openModal}
        style={{
          padding: '10px 20px',
          fontSize: '1.1em',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Open Modal
      </button>

      {/*
        The Modal component is rendered here in the React tree,
        but its actual DOM output will be in #modal-root thanks to createPortal.
      */}
      {showModal && (
        <Modal onClose={closeModal}>
          <h3>This is a Modal Title</h3>
          <p>This modal content is rendered outside the parent div, in a React Portal!</p>
          <p>Notice how it appears on top even with 'overflow: hidden' on its parent.</p>
          <button onClick={closeModal} style={{ marginTop: '15px', padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Close from inside
          </button>
        </Modal>
      )}
    </div>
  );
};

export default PortalDemo;