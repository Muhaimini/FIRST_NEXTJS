import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Profile } from 'interfaces'

const Home: NextPage = () : JSX.Element => {

  const { push } = useRouter()
  const profile : Profile = {
    name : "Muhaimin",
    age: 200
  }

  return (
    <div>
      <h1>Hi!</h1>
      <a className='link' onClick={() => push({ pathname: `/home/${profile.name}` })}>To username!</a>
      <br />
      <a className='link' onClick={() => push('/')}>Back!</a>
    </div>
  )
}

export default Home
