import React, {useRef, useState} from 'react';
import {Input, Icon} from 'antd';

const MAX_LEN = 20;

export default function CreateTodo(props) {
  const {onCreate} = props;
  const inputRef = useRef();

  const [count, setCount] = useState(MAX_LEN);

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  const handleKeyDown = e => {
    if(!(e.target.value.length<=count)){
      if(e.key!=="Backspace"){
        e.preventDefault();
      }
    }
  };
  return (
    <div className="CreateTodo">
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onPressEnter={handleEnterTodoText}
        addonAfter={<Icon type="plus" />}
      />
    </div>
  );
}
