
import './App.css'

import AppWalletProvider from "./AppWalletProvider.tsx";
import Test from "./Test.tsx";

function App() {

  return (
    <>
        <AppWalletProvider>
            <Test />
        </AppWalletProvider>

    </>
  )
}

export default App
