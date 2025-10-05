import logo from './logo.svg';
import './App.css';

import Welcome from "./component/Welcome";
import UserCard from "./component/UserCard";
import Counter from "./component/counter";


function App() {
  const name = "ReactJS học ngày 1";
  const year = new Date().getFullYear();

  return (
    <div>
        <Welcome></Welcome>

        <p>Đây là app đầu tiên của bạn 🧠</p>

        <UserCard name = "Phuc" age ={20} desc = "Frontend Developer" ></UserCard>

      <Counter >

      </Counter>
    </div>
  );
}

export default App;
