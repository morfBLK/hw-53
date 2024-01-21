import React from "react";

interface TaskProps extends React.PropsWithChildren {
  inputUser: string;
  onClickDelete:React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div>
      <div className='task'>
        <p>{props.inputUser}</p>
        <button className='btn-del' onClick={props.onClickDelete}>Удалить</button>
      </div>
    </div>
  );
};


export default Task;