import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

const cn = ["+1 (954)-310-7423", "findjob@jobfinder.com","Boston,Massachusetts,USA"];


function Contact() {
  return (
    <div className='App'>
      <Navbar />
      <Card
        title='Contact'
        imageUrl='https://media.gettyimages.com/id/1338286892/vector/business-card-icons.jpg?s=2048x2048&w=gi&k=20&c=FAdg9rOwmkc3d5AMptFyG4Wuc94VelsWVX6VhZvi1tI='
        body='This is the website Contact page'
      />
      {cn.map((contact)=>{
        return <h1> {contact} </h1>;
      })}
    </div>
  )
}

export default Contact;