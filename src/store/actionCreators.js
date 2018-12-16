// 1.提高代码的可维护性，2.自动化测试的方便
import { 
  CHANGE_INPUT_VALUE, 
  ADD_ITEM_VALUE, 
  DELETE_INPUT_VALUE,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from "./actionTypes";
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_ITEM_VALUE
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_INPUT_VALUE,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getInitList = () => ({
  type: GET_INIT_LIST

});


