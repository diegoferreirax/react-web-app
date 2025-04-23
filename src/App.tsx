import React from 'react';
import './App.css';
import Dashboard from './modules/dashboard';
import { TranslationProvider } from 'containers/translation';

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <Dashboard />
    </TranslationProvider>
  );
}

export default App;
