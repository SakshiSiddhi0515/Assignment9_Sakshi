import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

const hm = ["This website is one space for all job findings and application", "You can connect with various professionals and get to know each other ","Happy Job Browsing!!"];


function Home() {
  return (
    <div className='App'>
      <Navbar />
      <Card
        title='Home'
        imageUrl='https://media.gettyimages.com/id/1140687105/vector/search-engine-research-and-debugging.jpg?s=1024x1024&w=gi&k=20&c=z3kTNgw6_mF8Flu1wjapIZgxhj5TW6IJnhvAuuuzg5U='
        body='This is the website Home page'
      />
      {hm.map((home)=>{
        return <h1> {home} </h1>;
      })}
    </div>
  )
}

export default Home;