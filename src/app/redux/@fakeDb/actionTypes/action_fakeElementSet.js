import {A__FAKE_DB_SET} from "app/redux/@fakeDb/actionTypes/types";

export const actionFakeElementSet = (groupName, elementName, elementValue) => ({
  type: A__FAKE_DB_SET,
  payload: {
    groupName,
    elementName,
    elementValue,
  },
});
