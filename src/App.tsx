import './App.css'
import Sidebar from "./components/Sidebar.tsx"
import Dashboard from "./components/Dashboard.tsx"

function App() {

  return (
    <>
      <div className='main'>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  )
}

export default App
