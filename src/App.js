import React from 'react';
import Header from "../src/Website/components/Header/index"
import MinContent from "./Website/components/Pages/HomePage/index";

function App() {
  return (
    <div className='container-fluid'>
          <Header/>

          <MinContent/>
    </div>
  );
}

export default App;
