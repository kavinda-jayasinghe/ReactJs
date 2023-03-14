import {data} from './Data/MyData'
import './App.css';
import { useState } from 'react';

function App() {

const [search,setSearch]=useState('');
console.log(search);
  return (
    <div className="App">

     <input type="search" onChange={(e)=>setSearch(e.target.value)}></input>
 

      <table
        border="1px solid black"
        border-radius="10px"
        border-collapse="collapse"
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {data.filter((item)=>{
            return search.toLocaleUpperCase()===''
            ?item:item.first_name.toLocaleLowerCase().includes(search);
          }).map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
