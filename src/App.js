import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import imgSrc from './open-graph.jpg'

function App() {
    return ( 
      

      <div>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Rami</h1>

<br />

<img src={imgSrc} />

<br />

<img src="font-awesome.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
  </div>
 
        

    );
}

export default App;