// 容器组件，负责组件的业务逻辑
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { 
   getInputChangeAction ,
   getAddItemAction,
   getDeleteItemAction,
   getInitList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // console.log(action);
    // axios.get("/list.json").then((res) => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }
  
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  } 

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  render() {
    return <TodoListUI 
      inputValue = {this.state.inputValue}
      list = {this.state.list}
      handleInputChange = {this.handleInputChange}
      handleBtnClick = {this.handleBtnClick}
      handleItemDelete = {this.handleItemDelete}
    />
  }

}

export default TodoList;
