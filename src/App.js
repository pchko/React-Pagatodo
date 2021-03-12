import React, {useState} from 'react'
import { BanksContext } from './contexts/BanksContext'
import AppRouter from './routers/AppRouter'

function App() {

  const [banks, setBanks] = useState([]);

  return (
    <BanksContext.Provider value={{ banks:banks, setBanks:setBanks}}>
      <AppRouter />
    </BanksContext.Provider>
  )
}

export default App
