import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context'
import { useState } from 'react';

export const App = ({darkModeDefault=false}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault)
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className='bg-gray-100 text-gray-900'>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}
