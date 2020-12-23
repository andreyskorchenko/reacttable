import {
  SET_DATA_TYPE,
  SET_USERS,
  SORT_ID,
  SORT_FIRSTNAME,
  SORT_LASTNAME,
  SORT_EMAIL,
  SORT_PHONE,
  CHANGE_CURRENT_PAGE,
  CLEAR_SEARCH_TABLE,
  SEARCH_TABLE,
  ADD_INPUT,
  CHANGE_SHOW_ADD_USER,
} from "./types";

export const setDataType = (payload) => ({ type: SET_DATA_TYPE, payload });
export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const tableSortId = () => ({ type: SORT_ID });
export const tableSortFirstName = () => ({ type: SORT_FIRSTNAME });
export const tableSortLastName = () => ({ type: SORT_LASTNAME });
export const tableSortEmail = () => ({ type: SORT_EMAIL });
export const tableSortPhone = () => ({ type: SORT_PHONE });
export const searchTable = (payload) => ({ type: SEARCH_TABLE, payload });
export const clearSearchTable = () => ({ type: CLEAR_SEARCH_TABLE });
export const changeShowAddUser = () => ({ type: CHANGE_SHOW_ADD_USER });
export const addInputToTable = (payload) => ({ type: ADD_INPUT, payload });

export const changeCurrentPage = (payload) => ({
  type: CHANGE_CURRENT_PAGE,
  payload,
});
