import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Introduction from './page/Introduction';
import Gallery from './page/Gallery';
import Error from './page/Error';
import Root from './components/Root';
import Navi from './components/Navi';
import About from './components/About';
import Detail from './page/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Root />,
    errorElement : <Error />,
    children : [
      { index : true, element : <Introduction />},
      { path : '/gallery', element : <Gallery />},
      { path : '/about', element : <About />},
      { path : '/gallery/:galleryId', element : <Detail />}
    ]
  }


]);

function App() {
 
  return <RouterProvider router={router} />;

}

export default App;


