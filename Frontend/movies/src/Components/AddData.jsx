import React from 'react'
import axios from 'axios';
import { useState } from 'react'

function AddData() {
  const [moviename, setmoviename] = useState();
  const [actor, setactor] = useState();
  const [actress, setactress] = useState();
  const [rating, setrating] = useState();

  const senddata = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/postmoviedata',
        {
          moviename,
          actor,
          actress,
          rating
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
    <>
    <h1>AddStudentdata</h1>
    <form onSubmit={senddata}>
    <input type="text" name='moviename'
    onChange={(e) => setmoviename(e.target.value)} />
      <input type="text" name="actor" 
      onChange={(e) => setactor(e.target.value)} />
      <input type='text' name="actress" 
      onChange={(e) => setactress(e.target.value)} />
      <input type='number' name="rating" 
      onChange={(e) => setrating(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
    
  )
}

export default AddData