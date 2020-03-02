import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';




const App = ()=>{

  const AppId = "1e9fead7";
  const AppKey = "c6855e1b6ec0b03373b6e2eadfef8a4d";

  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    setRecipes(data.hits);
  }


  return(
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>

      {recipes.map(recipe =>(
        <Recipe title={recipe.recipe.label} 
        calories ={recipe.recipe.calories}
        image ={recipe.recipe.image}

        />
        ))}


    </div>
    );

}



export default App;






































// class App extends Component{

//   state={
//     name:"gauri1"
//   }

//     constructor(){
//       super();
//       console.log("Hi, I'm Constructor");
      
//     }

//     componentWillMount(){

//       if( window.innerWidth < 700){
//         this.setState({innerWidth:window.innerWidth});
//       }
      
//     }
//     render(){
//         return(
//           <div className="App">
//             <h1><b>Hello</b></h1>
//             <h1>Name:{this.state.name}</h1>
//             <h2>innerWidth:{this.state.innerWidth}</h2>
//           </div>

//           );
//     }
// }

// export default App;