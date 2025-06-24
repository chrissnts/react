import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Link from './components/link';
import Counter from './components/counter';
import List from './components/list'
import Mega from './components/mega'

function App() {
  return (
    <div className="App">

      <Welcome text = "Playboi Carlos"/>
      <Link url = "https://s2.glbimg.com/apjRRNwHzKc-w_-Zr2OjPBS9OGk=/e.glbimg.com/og/ed/f/original/2017/11/21/blob-fish-global-mascot.jpg" text = "DO NOT CLICK HERE"/>
      <Counter val ="0" />
      <List/>
      <Mega/>
      
    </div>
  );
}

export default App;
