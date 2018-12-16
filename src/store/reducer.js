import { 
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_INPUT_VALUE,
  INIT_LIST_ACTION
 } from './actionTypes';
// state 是整个store存储的数据，defaultStore是state的默认值
const defaultState = {
  inputValue: '',
  list: []
}
// state 指的是上一次的state的数据
// 纯函数指的是，给定固定的输入，就一定优固定的输出，而且不会优任何副作用
export default (state = defaultState, action) => {  
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data;
    return newState;
  }

  if(action.type === ADD_ITEM_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
