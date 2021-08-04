import './App.css';
import {useState} from 'react';
import axios  from 'axios'
function App() {
  const [data,setData] = useState({})
  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();

    for(let key in data){
      formData.append(key, data[key])
    }
    // [
    //   ["username","Nova"],
    //   ["username","Nova"],
    //   ["username","Nova"],
    //   ["username","Nova"]
    // ]
    console.log("format",formData,data)
    axios.post("http://localhost:3001/api/users",formData)
    .then(response=> console.log("la respuesta",response))
    .catch(error=> console.log("la error",error))
  }


  const uploadFile = (e) => {
    console.log(e.target.files)
    setData({...data, avatar:e.target.files[0]})
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit} style={{
        display:'flex',
        flexDirection:'column'
      }}>

        <input placeholder="Usernamee" type="text" name="username" onChange={handleChange}/>
        <input placeholder="email" type="text" name="email" onChange={handleChange}/>
        <input placeholder="password" type="text" name="password" onChange={handleChange}/>
        <input  type="file"  name="avatar" onChange={uploadFile}/>
        <button>Picame</button>
      </form>

    </div>
  );
}

export default App;
