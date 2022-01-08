import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {PlusCircle} from "react-bootstrap-icons";
import {FormAddUserWarehouse} from "../forms/FormAddUserWarehouse";

export const AddUserWarehouses = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-success ml-1 p-1">
          <PlusCircle/> Dodaj dostęp
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Dodaj dostęp do magazynu
        </ModalHeader>
        <ModalBody>
          <FormAddUserWarehouse closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
