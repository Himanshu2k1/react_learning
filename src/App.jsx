import './App.css'
import { CakeView } from './features/cake/cakeView'
import {IceCreamView} from './features/iceCream/iceCreamView'
import { UserView } from './features/user/userView'

function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
