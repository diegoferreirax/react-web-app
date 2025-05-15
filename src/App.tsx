import React from 'react';
import { TranslationProvider } from 'modules/translation/container/TranslationProvider';
import RoutesApp from 'routes/RoutesApp';
import RoutesProvider from 'routes/RoutesProvider';
import './App.css';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <RoutesProvider>
        <RoutesApp />
      </RoutesProvider>
    </TranslationProvider>
  );
}

export default App;
