import './App.css'
import { useState } from 'react';

function App() {
 //Aquí tu código
 const [name, setName] = useState('Sofia');
 const [newName, setNewName] = useState('');

 return (
     <div> 
         <h2>Teacher Name: {name}</h2>
         <ul>
            <li onClick={() => setName('Data')} style={{cursor: 'pointer'}}>Data</li>
            <li onClick={() => setName('Reyes')} style={{cursor: 'pointer'}}>Reyes</li>
            <li onClick={() => setName('Yolanda')} style={{cursor: 'pointer'}}>Yolanda</li>
         </ul>
     </div>
  )
}

export default App

