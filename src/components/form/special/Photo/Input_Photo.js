import React from 'react';
import {ApiErrors} from "components/api/ApiErrors";
import {Spinner} from "reactstrap";
import {Save} from "react-bootstrap-icons";
import useObjectState from "app/hooks/state/useObjectState";
import Cropper from "components/form/special/Photo/Cropper";

export const InputPhoto = ({ closeModal, refetch = () => {}, postFn }) => {
  const [{ image, error, isSubmitting }, setValue] = useObjectState({image: null, error: null, isSubmitting: false});

  const handleCrop = ({file}) => {
    setValue({image: file});
  }

  const handleSubmit = async () => {
    if(!image) return;
    if(isSubmitting) return;
    try {
      setValue({isSubmitting: true});
      const formData = new FormData();
      formData.append('File', image);
      await postFn(formData);
      refetch();
      closeModal();
    } catch(error) {
      setValue({isSubmitting: false, error});
    }
  }

  return (
    <>
      {error && <ApiErrors error={error}/>}
      <div className="d-flex flex-wrap">
        <Cropper onCrop={handleCrop} aspectRatio={1} />
        <div className="btn btn-outline-secondary ml-auto" onClick={closeModal}>
          Anuluj
        </div>
        {image && (
          <button
            type="button"
            className={`btn btn-primary d-flex align-items-center ml-25`}
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {!isSubmitting ? <Save className="mr-50" size={14}/>: <Spinner color="white" size="sm" />}
            Zapisz
          </button>
        )}
      </div>
    </>
  );
};
