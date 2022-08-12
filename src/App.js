import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import TradingCompetition from './pages/TradingCompetition';

const WrapperApp = styled.div`
  background: #040406;
  height: 100vh;
`


function App() {
  return (
    <WrapperApp>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trading-competition" element={<TradingCompetition />} />
      </Routes>
    </WrapperApp>
  );
}

export default App;
