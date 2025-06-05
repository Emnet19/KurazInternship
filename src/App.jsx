import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {id:1,title:"Buy groceries",completed:false},
    {id:2,title:"Read a book",completed:true},
    
  ])
 const[newTask,setNewTask]=useState("");


 function toggleCompleted(id){
     setTasks(tasks.map(task=>
         task.id===id?{...task,completed:!task.completed}:task
     ));
 }

 function deleteTask(id){
     setTasks(tasks.filter(task=>task.id!==id))
 }
 const addTask=()=>{
  if(!newTask.trim())
    return;
  const nextId=tasks.length?Math.max(...tasks.map(t=>t.id))+1:1;
  setTasks([...tasks,{id:nextId,title:newTask.trim(),completed:false}]);
  setNewTask("");
 }
  return (
    <>
      <div className=' max-w-md mx-auto mt-10 mb-20 p-4 bg-white rounded-xl shadow-lg justify-center'>
        <h1 className='  text-3xl text-center font-bold mb-4'>Task Manager App</h1>
        <div className='flex gap-[1px] mb-4  '>
        <input className='flex-1  px-3 py-2 border rounded border-gray ' 
        placeholder='Enter new task'
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
         />
        <button className='text-white bg-blue-500 px-3 py-2  rounded hover:bg-blue-600  '
        onClick={addTask}
        >Add
        </button>
        </div>

        <ul>
          {tasks.map((task)=>(
            <li key={task.id} className='flex items-center justify-between mb-2'>
              <label className='felx item-center cursor-pointer space-x-2'>
                <input 
                  type='check-box'
                  checked={task.completed}
                  onChange={()=>toggleCompleted(task.id)}
                  className='w-5 h-5'
                />
                <span className={task.completed ? 'line-through text-gray-400':''}>
                  {task.title}
                </span>
              </label>
              <button 
                 onClick={()=>deleteTask(task.id)}
                 className='text-red-500 hover:text-red-700 font-bold'
                 aria-label={`Delete task ${task.title}`}
              >
                 &times;
              </button>
            </li>
          
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
