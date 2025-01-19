import React from 'react'
import InputComponent from '../components/InputComponent.jsx';
import OutputComponent from '../components/OutputComponent.jsx';

const Home = () => {
  return (
    <div className="flex flex-col pb-60 bg-gray-100 items-center justify-center h-screen">
      <InputComponent />
      <OutputComponent />
    </div>
  )
}

export default Home