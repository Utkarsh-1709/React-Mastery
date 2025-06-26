import Student from "./Student"

function App() {

  return (
    <>
     <Student name = "Utkarsh" age = {26} isStudent = {true}/>
     <Student name = "Aadarsh" age = {25} isStudent = {true} />
     <Student name = "Kunal" age = {22} isStudent = {false} />
     <Student name = "Aniket" age = {23} isStudent = {false} />
     <Student />
    </>
  )
}

export default App
