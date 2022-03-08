import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {XCircleFill} from "react-bootstrap-icons";
import {FormCanceledWarehouseReceipt} from "../../forms/Form_CanceledWarehouseReceipt";


export const CanceledWarehouseReceipt = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-danger d-block flex-grow-1 mr-50">
          <XCircleFill/> Anuluj
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Anuluj PZ
        </ModalHeader>
        <ModalBody>
          <FormCanceledWarehouseReceipt closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
