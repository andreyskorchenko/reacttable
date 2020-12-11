import {
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
  SET_USERS,
} from "./types";

const initialState = {
  users: [],
  page: 1,
  sort: "",
  order: "",
  search: "",
  showAddUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case CHANGE_SHOW_ADD_USER:
      return {
        ...state,
        showAddUser: !state.showAddUser,
      };
    case ADD_INPUT:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SEARCH_TABLE:
      return {
        ...state,
        page: 1,
        search: action.payload,
      };
    case CLEAR_SEARCH_TABLE:
      return {
        ...state,
        search: "",
      };
    case SORT_ID:
      if (state.order === "desc") {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            if (a.id === b.id) return 0;
          }),
          sort: "id",
          order: "asc",
        };
      } else {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.id > b.id) return -1;
            if (a.id < b.id) return 1;
            if (a.id === b.id) return 0;
          }),
          sort: "id",
          order: "desc",
        };
      }
    case SORT_FIRSTNAME:
      if (state.order === "desc") {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;
            if (a.firstName === b.firstName) return 0;
          }),
          sort: "firstName",
          order: "asc",
        };
      } else {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.firstName > b.firstName) return -1;
            if (a.firstName < b.firstName) return 1;
            if (a.firstName === b.firstName) return 0;
          }),
          sort: "firstName",
          order: "desc",
        };
      }
    case SORT_LASTNAME:
      if (state.order === "desc") {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.lastName < b.lastName) return -1;
            if (a.lastName > b.lastName) return 1;
            if (a.lastName === b.lastName) return 0;
          }),
          sort: "lastName",
          order: "asc",
        };
      } else {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.lastName > b.lastName) return -1;
            if (a.lastName < b.lastName) return 1;
            if (a.lastName === b.lastName) return 0;
          }),
          sort: "lastName",
          order: "desc",
        };
      }
    case SORT_EMAIL:
      if (state.order === "desc") {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.email < b.email) return -1;
            if (a.email > b.email) return 1;
            if (a.email === b.email) return 0;
          }),
          sort: "email",
          order: "asc",
        };
      } else {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.email > b.email) return -1;
            if (a.email < b.email) return 1;
            if (a.email === b.email) return 0;
          }),
          sort: "email",
          order: "desc",
        };
      }
    case SORT_PHONE:
      if (state.order === "desc") {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.phone < b.phone) return -1;
            if (a.phone > b.phone) return 1;
            if (a.phone === b.phone) return 0;
          }),
          sort: "phone",
          order: "asc",
        };
      } else {
        return {
          ...state,
          users: state.users.sort((a, b) => {
            if (a.phone > b.phone) return -1;
            if (a.phone < b.phone) return 1;
            if (a.phone === b.phone) return 0;
          }),
          sort: "phone",
          order: "desc",
        };
      }
    default:
      return state;
  }
};

export default reducer;
