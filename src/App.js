import Landing from './pages/Landing.jsx'
import { SnackbarProvider } from 'notistack'

function App() {
  return (
  <SnackbarProvider >
    <div>
      <Landing/>
    </div>
  </SnackbarProvider>
  )
}

export default App;