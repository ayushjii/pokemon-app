import React from 'react'
import All from './AllPokemon'
import { Searchbar } from './Searchbar'

export const Home = () => {
  return (
    <div className='hel'>
        <Searchbar />
        <All/>
    </div>
  )
}
