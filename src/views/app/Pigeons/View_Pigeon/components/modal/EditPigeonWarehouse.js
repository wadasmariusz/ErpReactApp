import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormEditPigeonWarehouse} from "views/app/Pigeons/View_Pigeon/form/Form_EditPigeonWarehouse";


export const EditPigeonWarehouse = ({title, isMother, ...props}) => {
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
          Edytuj gołębnik
        </ModalHeader>
        <ModalBody>
          <FormEditPigeonWarehouse isMother={isMother} closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
