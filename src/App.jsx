import { list } from "postcss";
import { useState } from "react";
import './App.css';
import data from "./data.json";

function app(){
  const [newTask, setnewTask] = useState('')
  const [listTask, setlistTask] = useState(data)

  const handleSubmit = (event) => {
    event.preventDefault();

    //alert(newTask);

    setlistTask([... listTask,{id : listTask.length + 1, task : newTask, complete: false}])

    setnewTask('');
  }

  const handleChange = (e) => {
    setnewTask(e.target.value);
  }

  return (
    <div className='max-w-xl mx-auto mt-6'>
      <h1 className="text-3xl text-violet-600 mb-4">Todo List App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' className="border border-teal-500 px-2 py-2 rounded-md" value={newTask} onChange={handleChange}/>
        <button type="submit" className="bg-teal-600 px-2 py-2 text-white rounded-md ml-2">Add Task</button>
        <ul className="mt-4">
          {
            listTask.map(item => {
              return (<li key={item.id} className='border border-teal-600 py-2 px-2 mb-2 rounded-md'>{item.task}</li>)
            })
          }
        </ul>
      </form>
    </div>
  )
}

export default app