import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'

function Displaydata() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      
      try {
        const {data: response} = await axios.get('http://localhost:3000/getmoviedata');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      
    }
    fetchData();
  }, []);


  return (
<div>
    <h1>Student Data</h1>
    {/* <ul>
      {data.map((item) => (
        <li>Name:{item.stdname};  Email:{item.stdemail};  Age : {item.stdage}</li>
      ))}
    </ul> */}

    <table border='1px'>
      <thead>
    <tr>
      <th> Movie Name</th>
      <th>Actor</th>
      <th>Actress</th>
      <th>rating</th>
    </tr>
    </thead>
    <tbody>
      { data.map((r,i)=>(
        <tr key={i}>
          <td>{r.moviename}</td>
          <td>{r.actor}</td>
          <td>{r.actress}</td>
          <td>{r.rating}</td>
        </tr>
      ))}
    </tbody>
    </table>
  </div>
  )
}

export default Displaydata