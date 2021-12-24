import React from "react";
import {deletePigeonPhoto} from "app/crud/app/pigeons/deletePigeonPhoto";
import {useParams} from "react-router";
import {toast} from "react-toastify";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {InputPhoto} from "components/form/special/Photo/Input_Photo";
import {uploadPigeonPhoto} from "app/crud/app/pigeons/uploadPigeonPhoto";
import {useModal} from "app/hooks/modal/useModal";

const PhotoUploadForm = ({refetch}) => {
  const {pigeonId} = useParams();
  const {isOpen, open, close} = useModal();

  const deletePhoto = async () => {
    try {
      await deletePigeonPhoto(pigeonId);
      toast.success("Pomyślnie usunięto zdjęcie", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Wystąpił błąd", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    refetch();
  };

  return (
    <>
      <div className="d-flex">
        <label onClick={open} className="btn btn-primary d-block flex-grow-1 mr-50">
          Zmień zdjęcie
        </label>
        <div onClick={deletePhoto} className={"btn btn-outline-danger"}>
          Usuń zdjęcie
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={close} size="lg">
        <ModalHeader toggle={close}>
          Zmień zdjęcie
        </ModalHeader>
        <ModalBody>
          <InputPhoto
            closeModal={close}
            refetch={refetch}
            postFn={uploadPigeonPhoto(pigeonId)}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default PhotoUploadForm;
