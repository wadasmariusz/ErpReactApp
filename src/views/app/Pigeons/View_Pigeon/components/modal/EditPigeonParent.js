import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormEditPigeonParent} from "views/app/Pigeons/View_Pigeon/form/Form_EditPigeonParent";


export const EditPigeonParent = ({title, isMother, ...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-primary d-block flex-grow-1 mr-50">
          Edytuj
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Edytuj rodzica
        </ModalHeader>
        <ModalBody>
          <FormEditPigeonParent isMother={isMother} closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
