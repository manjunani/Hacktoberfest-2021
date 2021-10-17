import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Appointment',
      day: 'March 30th at 2:00 pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Movie',
      day: 'April 3rd at 2:00 pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Work',
      day: 'April 5th at 2:00 pm',
      reminder: false
    }
  ])

  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, reminder: !task.reminder }
          : task
      )
    )
  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {
        tasks.length > 0
          ? <Tasks tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder} />
          : 'No Tasks to show'
      }

    </div>
  );
}

export default App;
