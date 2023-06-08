import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'



interface AppState {
  subs: Array<Sub>
}

const initialState = [{
  nick: 'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'Dapelu hace de moderador',
},
{
  nick: 'cesar_fontalvo',
  subMonths: 7,
  avatar: 'https://i.pravatar.cc/150?u=cesar_fontalvo',
}]

function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);

  useEffect(() => {
    setSubs(initialState)
  }, [])
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
      <h1>Cesar Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
      {/* <Form onNewSub={setSubs} /> */}
    </>
  )
}

export default App
