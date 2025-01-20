
import './App.css';
import Profile from './components/Profile';
import Count from './components/Count';

let employeer = [
  {name : 'Tom', img : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", employer_id : 20240929},
  {name : 'John', img : "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", employer_id : 20240101},
  {name : 'Any', img : "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww", employer_id : 20200508},
]

function App() {
  return (
    <div>
      {/* <Profile name ={employeer[0].name} img={employeer[0].img} employer_id={employeer[0].employer_id} />
      <Profile name ={employeer[1].name} img={employeer[1].img} employer_id={employeer[1].employer_id}/>
      <Profile name ={employeer[2].name} img={employeer[2].img} employer_id={employeer[2].employer_id}/> */}
    </div>
  );
}

export default App;
