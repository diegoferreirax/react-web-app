import React from 'react';
import './App.css';
import Dashboard from './modules/dashboard';
import { TranslationProvider } from 'modules/translation/container';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <Dashboard />
    </TranslationProvider>
  );
}

export default App;
