import {A__FAKE_DB_REMOVE} from "app/redux/@fakeDb/actionTypes/types";


export const actionFakeElementRemove = (groupName, elementName) => ({
  type: A__FAKE_DB_REMOVE,
  payload: {
    groupName,
    elementName,
  },
});
