import React from 'react'

export default class TaskList extends React.Component{

    state={
        'tasks':[
         {
             id:1,
             description:'walk the dog',
             done:false
         }, 
         {
            id:2,
            description:'water the plants',
            done:false
        }, 
        {
            id:3,
            description:'pay the bills',
            done:false
        }, 

        ], 
        'newTaskName':""
    }

    updateFormField =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTask = e => { //Why does this e not have a bracker?
      let newTask ={
          'id':Math.random()*10000+9999,
          'description': this.state.newTaskName,
          'done':false
      }// of new task

      let currentValues = this.state.tasks; 
      let modifiedValues= [...currentValues, newTask];

      this.setState({
          'tasks':modifiedValues
      })

      //Check task 
      checkTask =(task_id) => {
          // to find the function that is being modified
          let currentTask = this.state.tasks.filter(t=>t.id===task_id)[0];
          //clone the modified function 

      }// end of check task


    }//end of addTask

    //what does key mean
    render(){
        return <React.Fragment>
            <h1>To do List</h1>
            <ul>
             {
            this.state.tasks.map((t)=>(
            <li key ={t.id}> 
                    {t.description}
                    <input type="checkbox" value={t.done===true}/>
                    <button>Edit</button>
                    <button>Delete</button>
            </li>  
                ))
             }
            </ul>

            <h2>Create new task</h2>
            <div>
              <label>Task Description</label>
              <input 
              type="text" 
              name="newTaskName"
              value={this.state.newTaskName}
              onChange={this.updateFormField}
              />
              <button onClick={this.addTask}> Add </button>
            </div> 
        </React.Fragment>

    }//end of return 
}
