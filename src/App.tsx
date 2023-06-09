import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import { Sub, SubsResponseFromAPI } from './types'



interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

// const initialState = [{
//   nick: 'dapelu',
//   subMonths: 3,
//   avatar: 'https://i.pravatar.cc/150?u=dapelu',
//   description: 'Dapelu hace de moderador',
// },
// {
//   nick: 'cesar_fontalvo',
//   subMonths: 7,
//   avatar: 'https://i.pravatar.cc/150?u=cesar_fontalvo',
// }]

function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    // setSubs(initialState)

    const fetchSubs = (): Promise<SubsResponseFromAPI[]> => {
    return fetch('http://localhost:3000/data').then(res => res.json())
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromAPI[]): Array<Sub> => {
      return apiResponse.map( subsFromApi => {
        // console.log(subsFromApi)
        const {nick, months: subMonths, profileUrl: avatar, description} = subsFromApi
        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    // fetchSubs()
    // .then(apiSubs => {
    //   const subs = mapFromApiToSubs(apiSubs)
    //   setSubs(subs)
    // })
    fetchSubs()
    .then(mapFromApiToSubs)
    .then(setSubs)

  }, [])
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber( n => n+1)
  }

  return (
    <>
      <h1>Cesar Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
      <p>New Subs {newSubsNumber}</p>
      {/* <Form onNewSub={setSubs} /> */}
    </>
  )
}

export default App
