import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const Home: NextPage = () : JSX.Element => {

    const { push, query } = useRouter()

    console.log(query)
    

    return (
        <div>
        <h1>Hi, { query.username }!</h1>
        <a onClick={() => push('/')}>To Index</a>
        </div>
    )
}

export default Home
