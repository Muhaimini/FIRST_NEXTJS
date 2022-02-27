import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Profile } from 'interfaces'
import { useState } from 'react'

const Home: NextPage = () : JSX.Element => {

  const { push } = useRouter()
  const profile : Profile = {
    name : "Muhaimin",
    age: 200
  }

  const [number, setNumber] = useState(1)

  return (
    <div>
      <h1>Hi!</h1>
      <h1>{ number }</h1>
      <button onClick={() => setNumber(number+1)}>Add</button>
      <br />
      <a className='link' onClick={() => push({ pathname: `/home/${profile.name}` })}>To username!</a>
      <br />
      <a className='link' onClick={() => push('/')}>Back!</a>
    </div>
  )
}

export default Home
