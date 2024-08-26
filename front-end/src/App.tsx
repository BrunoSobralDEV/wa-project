import { useState } from 'react'
import 'react18-json-view/src/style.css'

import { Header, JsonSection, InfoSidebar, SaveButton, PentagonoBg } from './components';

export function App() {
  const [myJsonObject] = useState({})
  
  const handleSaveJson = () => {
    const data = JSON.stringify(myJsonObject, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hierarchy.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className='bg-[#F9F9F9] h-screen flex flex-col overflowx-auto'>
      <Header />

      <main className='flex flex-1 justify-center items-center relative'>
        <div className="flex justify-center gap-2 m-10 items-center h-96 w-3/4">
          <PentagonoBg />
          <JsonSection src={myJsonObject} />
          <div className='relative flex flex-col justify-around h-full p-6 gap-4'>
            <InfoSidebar />
            <SaveButton onClick={handleSaveJson} />
          </div>
        </div>
      </main>
    </div>
  )
}
