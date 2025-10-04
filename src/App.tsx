// App.tsx
import React from 'react';
import { AppProvider } from './context/PageContext';
import LoadingSpinner from './components/modules/Loading';
import ViewContainer from './components/tools/ViewContainer';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app">
        <ViewContainer />
        <LoadingSpinner />
      </div>
    </AppProvider>
  );
};

export default App;