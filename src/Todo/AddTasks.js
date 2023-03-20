import React from 'react'

const AddTasks = ({addtasks,setAddtasks,onHandleTasks}) => {
  return (
    <div className='addtasks'>
    <form onSubmit={onHandleTasks}>
    <div className='additems'>
        <input type="text" value={addtasks} onChange={(e)=>setAddtasks(e.target.value)} />
        <button className='btn' type='submit'>Add Tasks</button>
        </div>
    </form>
    </div>
  )
}

export default AddTasks