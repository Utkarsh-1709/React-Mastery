import List from "./List"
import Vegetable from "./Vegetable";

function App() {
  
  //List Components are reusable
  const vegetables = [{id: 1, name : "potato", calories: 95}, 
    {id: 2, name : "tomato", calories: 45}, 
    {id: 3, name : "broccoli", calories: 105},
    {id: 4, name : "brinjal", calories: 159},
    {id: 5, name : "celery", calories: 37}];

  return (
    <>
     <List />
     {/* List Components Reusability */}
     {vegetables.length>0 ? <Vegetable items={vegetables} category="Vegetables"/>:null}
         {/* vegetables.length>0 ? ---> this is known as short-circuiting which means if there is nothing in the list, list will not render */}
    </>
  )
}

export default App
