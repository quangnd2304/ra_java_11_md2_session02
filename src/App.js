import logo from './logo.svg';
import './App.css';
import ChildClassComp from './components/ChildClassComp';
import ChildFuncComp from './components/ChildFuncComp';
import EventDemo from './components/EventDemo';

function App() {
  return (
    <div className="App">
      <ChildClassComp companyName="Rikkei Academy" className="Java-11">Quý Mão</ChildClassComp>
      <ChildClassComp companyName="RikkeiSoft" className="Java-10">2023</ChildClassComp>
      <ChildFuncComp className="Java-11">Lập trình viên</ChildFuncComp>
      <EventDemo />
    </div>
  );
}

export default App;
