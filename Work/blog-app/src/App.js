import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './page/Error';
import Blogpost from './page/Blogpost';
import Home from './page/Home';
import PostDetail from './page/PostDetail';
import Login from './page/Login';
import Root from './page/Root';
import Search from './page/Search';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <Error />,
    children : [
      {index : true, element : <Home />},
      { path : '/blogpost', element : <Blogpost />},
      { path : '/postDetail', element : <PostDetail />},
      { path : '/login', element : <Login />},
      { path : '/postDetail/:Id', element : <Search />},
    ]
    }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
