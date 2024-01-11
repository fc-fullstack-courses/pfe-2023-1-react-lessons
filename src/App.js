import Header from './components/Header';
import MainContent from './components/MainContent';
import Greeting from './components/Greetings';
import './App.css';
import TextElement from './components/TextElement';
import Phone from './components/Phone';

const user1 = {
  name: 'User',
  lastName: 'Userenko',
};

const user2 = {
  name: 'Test',
  lastName: 'Testovich',
};

const user3 = {
  name: 'John',
  lastName: 'Doe',
};

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Greeting user={user1} />
      <Greeting user={user2} />
      <Greeting user={user3} />
      <TextElement text="Long lorem ipsum text" tooltip="this is title" />
      <TextElement text="Other text" tooltip="other title" />
      <Phone color="black" price={15999.99} />
    </>
  );
}

export default App;
