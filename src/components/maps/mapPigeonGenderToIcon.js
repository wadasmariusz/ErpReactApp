import { GenderFemale, GenderMale } from "react-bootstrap-icons";
import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import { SIZE_INPUT_ICON, SIZE_INPUT_ICON_LG } from "app/config/sizes";

export const mapPigeonGenderToIcon = (gender, id, size) => {
  return (
    <>
      <UncontrolledTooltip
        placement="top"
        target={"pigeon-gender-" + id}
        trigger="hover"
      >
        {gender?.name}
      </UncontrolledTooltip>
      <div className="d-flex">
        <div id={"pigeon-gender-" + id}>
          {gender?.id === 1 ? (
            <GenderMale color="#0F0575" size={size ?? SIZE_INPUT_ICON_LG} />
          ) : (
            <GenderFemale color="#DA368D" size={size ?? SIZE_INPUT_ICON_LG} />
          )}
        </div>
      </div>
    </>
  );
};
