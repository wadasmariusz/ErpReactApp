import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormEditWarehouseCategories} from "views/app/Warehouses/View_Warehouse/forms/Form_EditWarehouseCategories";


export const EditWarehouseCategories = ({title, ...props}) => {
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
          Edytuj Kategorie
        </ModalHeader>
        <ModalBody>
          <FormEditWarehouseCategories closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
