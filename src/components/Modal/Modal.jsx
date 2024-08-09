import Modal from 'react-modal';

Modal.setAppElement('#root');

const FormModal = ({ isModalOpen, closeModal, children }) => {

    const handleModalClose = () => {
        closeModal(false);
    };

    console.log('FormModal rendered. isModalOpen:', isModalOpen);

    const modalStyles = {
        content: {
            width: '95%',
            maxWidth: '572px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 'fit-content',
            maxHeight: '90vh',
            background: 'rgba(239, 239, 239, 0.85)',
            border: 'none',
            borderRadius: '15px',
            padding: '2rem',
        }
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            shouldCloseOnOverlayClick={true}
            style={modalStyles}  
        >
            {children}
        </Modal>
    );
};

export default FormModal;
