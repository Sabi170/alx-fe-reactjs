import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Posts Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;