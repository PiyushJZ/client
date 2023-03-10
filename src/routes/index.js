import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <StreamList />,
      },
      {
        path: 'streams/new',
        element: <StreamCreate />,
      },
      {
        path: 'streams/edit/:id',
        element: <StreamEdit />,
      },
      {
        path: 'streams/delete/:id',
        element: <StreamDelete />,
      },
      {
        path: 'streams/:id',
        element: <StreamShow />,
      },
    ],
  },
]);

export default router;
