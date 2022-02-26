import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Profile } from 'interfaces'

const Index: NextPage = () : JSX.Element => {

  const { push } = useRouter()

  const profile : Profile = {
    name : "Muhaimin",
    age: 200
  }  

  return (
    <div>
      <h1>Hello!</h1>
      <p>Name : { profile.name }</p>
      <p>Age : { profile.age }</p>
      <button onClick={() => push({ 
          pathname: '/home'
        })
      }>Move</button>
      <br />
      <h1>Developer : { process.env.developer_name }</h1>
      <h1>At : { process.env.commpany }</h1>
    </div>
  )
}

export default Index
