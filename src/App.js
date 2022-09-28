
import './App.css';
import Activities from './components/Activities/Activities';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className='row row-cols-2'>
        <div className="col-9 bg-light">
          <Activities></Activities>
        </div>
        <div className='col-3 bg-warning'>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
