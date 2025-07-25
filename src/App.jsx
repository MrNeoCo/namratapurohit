import React from 'react'
import AppRouter from './router/Router';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 text-white'>
      <ScrollToTop />
      <Nav />
      <AppRouter />
    </div>
  )
}

export default App