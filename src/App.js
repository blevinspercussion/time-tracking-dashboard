import './App.css';
import UserCard from './components/UserCard';
import DetailCard from './components/DetailCard';

import cardInfo from './data.json';

function App() {

  const info = cardInfo;

  return (
    <div className="App">
      <div id='main-content'>
        <UserCard />
        {info.map((item) => {
          <DetailCard 
            key={item.title}
            item={item}
            title={item.title}
            current={item.timeframes.daily.current}
            previous={item.timeframes.daily.previous}
            />
        })}
      </div>
    </div>
  );
}

export default App;
