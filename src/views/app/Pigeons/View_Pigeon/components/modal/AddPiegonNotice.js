import {useModal} from "app/hooks/modal/useModal";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import React from "react";
import {FormAddPigeonNotice} from "views/app/Pigeons/View_Pigeon/form/Form_AddPigeonNotice";
import {CurrencyDollar} from "react-bootstrap-icons";


export const AddPigeonNotice = ({...props}) => {
  const {isOpen, open, close} = useModal();

  return (
    <>
      <div className="d-flex" {...props}>
        <label onClick={open} className="btn btn-outline-primary d-block flex-grow-1 mr-50">
          <CurrencyDollar/> Wystaw na giełdę
        </label>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Wystaw na giełdę
        </ModalHeader>
        <ModalBody>
          <FormAddPigeonNotice closeModal={close}/>
        </ModalBody>
      </Modal>
    </>
  );
};
