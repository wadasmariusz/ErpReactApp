import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {TrashFill, XCircleFill} from "react-bootstrap-icons";
import {FormRemoveWarehouseAccess} from "../../forms/Form_RemoveWarehouseAccess";


export const RemoveWarehouseAccess = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-danger">
          <TrashFill/>
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Usuń dostęp
        </ModalHeader>
        <ModalBody>
          <FormRemoveWarehouseAccess
            warehouseId = {props.warehouseId}
            closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
