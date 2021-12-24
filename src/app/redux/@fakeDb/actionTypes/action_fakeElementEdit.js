import {A__FAKE_DB_EDIT} from "app/redux/@fakeDb/actionTypes/types";

export const actionFakeElementEdit = ({groupName, elementName, elementValue, elementKey}, isSimple = false) => ({
  type: A__FAKE_DB_EDIT,
  payload: {
    groupName,
    elementName,
    elementValue,
    elementKey,
    isSimple,
  },
});
