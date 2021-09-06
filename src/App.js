import React, {useState,useEffect} from 'react'
import './App.css';
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  // console.log(people)
  useEffect(() => {
    window.document.title= 'Birthday Reminder' 
  },[])

  return (
    <main className="container">
      <h3 className="heading">{people.length} birthday reminders</h3>
      <List people={people}/>
      <button type='button' className='clear-btn'
      onClick={() => {setPeople([])}}>Clear Birthdays</button>
    </main>
  );
}

export default App;
