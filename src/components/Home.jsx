import { useState } from "react"
import "./Home.css"
import Header from "./Header"
function Home(){
    const[title,setTitle]=useState("")
    const[description,setdescription]=useState("")
    const[AddData,setAddData]=useState([])
    const[darkMode, setDarkMode] = useState(false);
    const add=()=>{
        const obj = { title: title, description: description}
        setAddData([...AddData,obj])
    }
    // const edit=(index)=>{
    //     AddData.push(index)
    //     setAddData([...AddData])
    // }
    const remove=(index)=>{
        AddData.splice(index,1)
        setAddData([...AddData])
    }
    return(
        <div className={`${darkMode && 'dark-mode'}`}>
        <div class= "Goal">
            <Header handleToggleDarkMode={setDarkMode}/>
            <h1>My Goals</h1>
            <input type="text" placeholder="Enter Your goal title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Enter your goal Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <button onClick={add}>Add Goals</button>
            {
                AddData.map((values,i)=>
                    <>
                        <h1>{values.title}</h1>
                        <p>{values.description}</p>
                        <button onClick={()=>remove(i)} className="delete">Delete</button>
                        
                    </>
                )  
            }
        </div>
        </div>
    )
}
export default Home;