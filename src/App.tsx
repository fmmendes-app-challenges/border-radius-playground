import React from 'react';

import GlobalStyles from './styles/global';
import Playground from './components/Playground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Playground />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
