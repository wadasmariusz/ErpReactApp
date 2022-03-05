import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormEditProductKind} from "views/app/Products/View_Product/forms/Form_EditProductKind";


export const EditProductKind = ({title, ...props}) => {
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
          Edytuj rodzaj
        </ModalHeader>
        <ModalBody>
          <FormEditProductKind closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
