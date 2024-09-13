import './App.css';
import WeatherWidget from './components/WeatherWidget'
import CalendarWidget from './components/CalendarWidget';
import TodoWidget from './components/TodoWidget';
function App() {
  return (
    <div className="App">
       <WeatherWidget/>
       <CalendarWidget/>
       <TodoWidget/>
    </div>
  );
}

export default App;
