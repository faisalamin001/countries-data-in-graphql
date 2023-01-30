import { Routes, Route } from 'react-router-dom';
import Nav from './component/nav';
import NotFound from './component/notFound';
import Country from './component/userDetail';
import Countries from './component/users';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='country/:id' element={<Country />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

const Home = () => <h3>Home</h3>;
