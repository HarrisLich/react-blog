import Home from './views/Home';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import ViewTwo from './views/ViewTwo';
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col w-full">
      <div style={{height: "calc(100vh)"}}>
        <ParticlesBackground/>
        <div className="absolute w-full">
          <Home/>
        </div>
      </div>
      <ViewTwo/>
      <Footer/>
    </div>
  );
}

export default App;
