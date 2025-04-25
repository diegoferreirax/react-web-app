import React from 'react';
import { TranslationProvider } from 'modules/translation/container';
import RoutesApp from 'routes';
import RoutesProvider from 'routes/container';
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
