import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [title, settitle] = useState("");
  const [desc, setdesk] = useState("");
  const [mainTask, setmainTask] = useState([]);


  function handler(e){
      e.preventDefault()
      settitle("")
      setdesk("")
      setmainTask([...mainTask , {title , desc}])
  }

   const  deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i,1);
        setmainTask(copyTask);

  }

  let render = <h2  className='bg-slate-400 p-4 text-center text-xl font-bold'>NO TASK HERE</h2>


  if(mainTask.length > 0){
    render = mainTask.map((t,i) => {
       return <li key={i}> 
        <div 
        className='flex items-center justify-between bg-slate-400 p-4 text-center font-bold '>
                    <h2 className='text-3xl'>{t.title}</h2>
                    <h2  className='text-xl'>{t.desc}</h2>
                    <button onClick={() => {
                      deleteHandler(i)
                    }} className='p-3 text-2xl bg-red-400 text-white rounded font-bold'>Delete</button>
              </div>
       </li>
    })
  }

 

  return (
    <>
       <h1 className='text-center font-bold text-5xl p-5 text-black '>TO DO LIST</h1>
       <div className='flex items-center justify-center'>

        <form onSubmit={handler} >
        <input
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
         className='text-2xl font-semibold outline-none rounded-xl py-2 px-4 border-4 border-black border-solid m-4' type="text" placeholder='Write Task here' id="" />
        <input
        value={desc}
        onChange={(e) => {
          setdesk(e.target.value)
        }}
         className='text-2xl font-semibold outline-none rounded-xl py-2 px-4 border-4 border-black border-solid m-4' type="text" placeholder='Write Description here' id="" />
        <button className='text-2xl bg-black rounded-xl p-4 m-4 text-white font-bold'>Add Task</button>
        <hr />
        <div className='my-5'>
          
      
          <ul>
            {render}
          </ul>
        </div>
        </form>
     
       </div>
    </>
  )
}

export default App