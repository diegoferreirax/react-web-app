import React from 'react';
import { TranslationProvider } from 'modules/translation/container/TranslationProvider';
import { HashRouter } from 'react-router-dom';
import RoutesApp from 'routes/RoutesApp';
import './App.css';
import RoutesProvider from 'routes/RoutesProvider';

const App: React.FC = () => {
  return (
    <HashRouter>
      <TranslationProvider>
        <RoutesProvider>
          <RoutesApp />
        </RoutesProvider>
      </TranslationProvider>
    </HashRouter>
  );
}

export default App;
