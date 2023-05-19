
import './App.css';
import KeepNotes from './KeepNotes';
import Header from './Header';
import Footer from './Footer';
import Tasks from './Tasks';
import { useState } from 'react'


function App() {
  const [allData, setAllData] = useState([]);

  const handleAdd = (notes) => {
    setAllData((preval) => { return ([...preval, notes]) });
    console.log(allData);
  }

  const handleDelete = (id) => {
    let temp = [...allData];
    temp.splice(id, 1);
    setAllData(temp)
  }

  return (
    <>
      <div className="App">
        <div className='content'>
          <Header />
          <KeepNotes handleAdd={handleAdd} />

          {allData.map((item, index) => {
            return (
              <>
                <Tasks
                  key={index}
                  id={index}
                  title={item.title}
                  task={item.task}
                  handleDelete={handleDelete} />
              </>
            )
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
