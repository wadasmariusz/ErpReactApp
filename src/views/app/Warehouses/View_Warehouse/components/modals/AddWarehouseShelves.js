import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormAddWarehouseShelf} from "views/app/Warehouses/View_Warehouse/forms/Form_AddWarehouseShelf";
import {PlusCircle} from "react-bootstrap-icons";


export const AddWarehouseShelves = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-success d-block flex-grow-1 mr-50">
          <PlusCircle/> Dodaj półki
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Dodaj półki
        </ModalHeader>
        <ModalBody>
          <FormAddWarehouseShelf closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
