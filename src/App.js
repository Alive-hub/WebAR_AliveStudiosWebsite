import logo from './logo.svg';
import './App.css';
import "@google/model-viewer";

function App() {
  return (
      <div className="App">
        <model-viewer
            src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
            alt="A 3D model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            style={{width: "100%", height: "100%"}}
        ></model-viewer>
      </div>
  );
}

export default App;
