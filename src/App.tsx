import React from 'react';
import { TranslationProvider } from 'modules/translation/container';
import RoutesApp from 'routes';
import './App.css';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <RoutesApp />
    </TranslationProvider>
  );
}

export default App;
