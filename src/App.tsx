import { ExperienceBar } from './components/ExperienceBar';
import { LifeBar } from './components/LifeBar';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <>
      <ExperienceBar />
      <LifeBar />
      </>
    </div>
  );
}

export default App;
