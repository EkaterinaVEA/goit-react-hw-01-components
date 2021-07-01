import './App.css';
import Profile from './components/Statistics/Statistics';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics  />; */}
      <Statistics stats={statisticalData} />;
    </div>
  );
}

export default App;
