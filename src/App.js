import { useState, useEffect} from 'react';
import './App.css';
import Cardlist from "./Components/Card-list/card-list.component"
import SearchBox from "./Components/Search-box/search-box.component"


const App = () => {
  const [search, setSearchField] = useState('');
  const [Monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(Monsters);

  useEffect(() => {
    console.log("effect")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(() =>{
    const NewFilteredMonsters = Monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
      });

      setFilteredMonsters(NewFilteredMonsters);
  },[Monsters,search])

  const onSearchChange = (event) =>{
    const string = event.target.value.toLocaleLowerCase();
    setSearchField(string)   
  }

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Roladex</h1>
    <SearchBox OnchangeHandler = {onSearchChange} Placeholder ='Search Monsters' className="monsters-search-box"/>
     <Cardlist Monsters={filteredMonsters}/>
    </div>
  );
}
// class App2 extends Component{

//   constructor(){
//       super();

//       this.state = {
//         Monsters: [],
//         Search: ""
//       }; 
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(() =>{
//             return {Monsters : users}
//           },
//           () =>{
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onSearchChange = (event) =>{
//     this.setState(()=>{
//       return {Search: event.target.value.toLocaleLowerCase()}
//     })
// }


//   render(){

//     const { Monsters, Search} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = Monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(Search);
//   });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Roladex</h1>
//       <SearchBox OnchangeHandler = {onSearchChange} Placeholder ='Search Monsters' className="monsters-search-box"/>
//        {/* {filteredMonsters.map((Monster) =>{
//           return (<div key={Monster.id}>
//                    <h1>{Monster.name}</h1>
//                   </div>
//                   )
//         })
//        } */}
//        <Cardlist Monsters={filteredMonsters}/>
//       </div>
//     );
//   }

  
// }

export default App;
