import React from 'react'

const UpdateTasks = ({setUpdateTaks,updateTaks,onHandleUpdate,updateSubmit}) => {

    const cancleTasks = () =>{
        setUpdateTaks(" ")
    }
  return (
    <div className='updateTasks'>
    <form onSubmit={updateSubmit}>
    <div className='additem'>
        <input type="text" value={updateTaks && updateTaks.title} onChange={(e)=>onHandleUpdate(e)} />
        <button className='btn' type='submit'>Update</button>
        <button className='btn-cancle' type='submit' onClick={cancleTasks}>Cancle</button>
        </div>
    </form>
    </div>
  )
}

export default UpdateTasks