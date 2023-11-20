import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Emodal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.message === true) {
    //   openModal();
       setIsOpen(props.message);
      
      console.log(props.message);
    }
  },[]);


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
    
{
    modalIsOpen &&   <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }, content: { background:"white" } }}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
}
      
    </div>
  );
}
