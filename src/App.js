import './App.css';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import {Home} from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cat } from './components/Cat';


function App() {
  const client = new QueryClient({defaultOptions: {
    queries : {
      refetchOnWindowFocus: false,
    },
  }
  });

  return (
    <div className="App">
<   QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Cat />} />
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
