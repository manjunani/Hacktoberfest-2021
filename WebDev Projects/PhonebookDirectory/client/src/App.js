import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'


function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [listOfFriends, setListOfFriends] = useState([]);

  const addFriend = ()=>{
    Axios.post("http://localhost:3001/create",{
      name: name,
      phone: phone,
    }).then((response)=>{
      setListOfFriends([...listOfFriends, {_id: response.data._id, name: name, phone: phone}]);
    });
  };

  const updateFriend = (id) =>{
    const newPhone = prompt("Update Phone Number");
    Axios.put("http://localhost:3001/update",{newPhone: newPhone, id: id}).then(()=>{
      setListOfFriends(listOfFriends.map((val)=>{
        return val._id == id ? {_id:id, name: val.name, phone: newPhone} : val;
      }))
    })
  }

  const deleteFriend = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
      setListOfFriends(listOfFriends.filter((val)=>{
        return val._id != id;
      }))
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/read",{
    }).then((response)=>{
      setListOfFriends(response.data);
    }).catch((error)=>{
      alert(error);
    })
  }, [])

  return (
    <div className="App">
      <h1>Friends Phonebook Directory</h1>
      <h4>Save the information of your loved ones.</h4>
      <div className="inputs">
        <input type="text" placeholder="Enter Friend's Name" onChange={(event)=>{setName(event.target.value)}}/>
        <input type="phone-number" placeholder="Enter Friend's phone no." onChange={(event)=>{setPhone(event.target.value)}}/>
        <button onClick={addFriend}>Add Information</button>
      </div>
      <div className="listOfFriends">
        {listOfFriends.map((val) => {
          return( 
            <div className="friendContainer">
              <div className="friend">
              <h3>Name:&nbsp; {val.name}</h3>
              <h3>Phone Number:&nbsp; {val.phone}</h3>
              </div>
              <button onClick={()=>{
                updateFriend(val._id);
              }}><FiEdit  size="20px"/></button>
              <button><RiDeleteBin6Line size="20px" onClick={()=>{
                deleteFriend(val._id);
              }}/></button>
            </div>
          );
        })};
      </div>
    </div>
  );
}

export default App;
