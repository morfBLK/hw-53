import {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [task, setTask] = useState([
    {inputUser: 'qwerty1', id: 'd1'},
    {inputUser: 'qwerty2', id: 'd2'},
    {inputUser: 'qwerty3', id: 'd3'},
    {inputUser: 'qwerty4', id: 'd4'}
  ]);

  const [currentTask, setCurrentTask] = useState([
      {inputUser: 'Добавить новое', id: ''}
    ]
  )

  const firstThreeTask = task.map((task) => {
    return (
      <Task inputUser={task.inputUser} key={task.id} onClickDelete={() => deleteTask(task.id)}/>
    )
  });

  const deleteTask = (id: string) => {
    const newTasks = [...task];
    for (let i = 0; i < newTasks.length; i++) {
      if (id === newTasks[i].id) {
        newTasks.splice(i, 1);
      }
    }
    setTask(newTasks);
    console.log(id)
  }

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const randomId = String(Math.floor(Math.random() * (10000 - 5 + 1)) + 5);
    const task = {...currentTask[0]};
    task.inputUser = event.target.value;
    task.id = randomId
    const currentTaskCopy = [...currentTask];
    currentTaskCopy[0] = task;
    setCurrentTask(currentTaskCopy);
    console.log(currentTaskCopy);
  };

  const newTask = () => {
    const copyTasks = [...task, currentTask[0]];
    setTask(copyTasks);
  }

  return (
    <div className="App">
      <AddTaskForm onClick={newTask} currentTask={currentTask[0].inputUser}
                   onTaskChange={event => changeTask(event)}/>
      {firstThreeTask}
    </div>
  )
}

export default App
