// UI组件可以使用无状态组件
// 当一个函数中只有render函数时，我们就可以换掉普通组件,
import React  from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd'; 
const TodoListUI = (props) => {
  return (
    <div>
     <div style={{marginTop:"10px", marginLeft:"10px"}}>
      <Input placeholder='todo info' value={props.inputValue}
        style={{
          width: '300px',
          marginRight: '10px'
        }} 
        onChange= {props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button> 
    </div>
    <List
      style={{marginTop: '10px', marginLeft: '10px',width: '300px'}}
      bordered
      dataSource={props.list}
      renderItem={(item) => (<List.Item onClick={(index) => (props.handleItemDelete(index))}>{item}</List.Item>)}>
    </List>
  </div>
  )
}
export default TodoListUI;