import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AllPosts } from './demo/AllPosts';
import { Layout } from './demo/Layout';
import { MessageBoard } from './demo/MessageBoard';
import { PostView } from './demo/PostView';
import { Welcome /* loader as welcomeLoader*/ } from './demo/Welcome';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MessageBoard />,
        children: [
          {
            path: ':pageNumber',
            element: <AllPosts />,
          },
          {
            path: 'post/:postId',
            element: <PostView />,
          },
        ],
      },
      {
        path: 'welcome',
        element: <Welcome />,
        // loader: welcomeLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
