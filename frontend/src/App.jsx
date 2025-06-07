import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import './App.css'
function App() {

  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/chat" component={ChatPage} />
    </>
  )
}

export default App
