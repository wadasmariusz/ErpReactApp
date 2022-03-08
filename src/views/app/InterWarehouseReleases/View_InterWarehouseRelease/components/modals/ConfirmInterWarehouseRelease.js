import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {CheckSquareFill} from "react-bootstrap-icons";
import {FormConfirmInterWarehouseRelease} from "../../forms/Form_ConfirmInterWarehouseRelease";


export const ConfirmInterWarehouseRelease = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-success d-block flex-grow-1 mr-50">
          <CheckSquareFill/> Potwierdź
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Potwierdź RW
        </ModalHeader>
        <ModalBody>
          <FormConfirmInterWarehouseRelease closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
