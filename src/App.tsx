import { useEffect, useState } from 'react'
import './App.css'


interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

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
  


  return (
    <>
      <h1>Cesar Subs</h1>
      <ul>
        {
        subs.map( sub => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default App
