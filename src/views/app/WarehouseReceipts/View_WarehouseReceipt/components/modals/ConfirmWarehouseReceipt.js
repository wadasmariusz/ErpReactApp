import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {CheckSquareFill} from "react-bootstrap-icons";
import {FormConfirmWarehouseReceipt} from "../../forms/Form_ConfirmWarehouseReceipt";


export const ConfirmWarehouseReceipt = ({...props}) => {
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
          Potwierdź PZ
        </ModalHeader>
        <ModalBody>
          <FormConfirmWarehouseReceipt closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
