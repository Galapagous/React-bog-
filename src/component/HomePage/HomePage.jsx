import React from "react"
import BlogItem from "../BlogItem/BlogItem"
import Img from "../images/blog4.jpg"
import Img1 from "../images/img1.jpg"
import Img2 from "../images/img3.jpg"
import Img3 from "../images/img2.jpg"
import Img4 from "../images/img4.jpg"
import "./homePage.css"

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="blogCard">
        <BlogItem
          time="15min ago"
          className="blogimage"
          img={Img}
          title="The State of Nigeria"
          paragraph="Education help us to identity what is a fact 
        in all case, regardless of the faith, tribe or religion of the person who point to you. education when it qualitative and broadbase
         help to moderate social tension, this is the tension between the have and have not. By giving the poor access to thesame quality of education
          as the rich, you are not only providing the tool to change their social economic circmstance, you are giving them a control over how 
          they express grieviance over those social economic circumstance."
        />
      </div>
      <div className="blogCard">
        <BlogItem
          time="45min ago"
          className="blogimage"
          img={Img2}
          title="The New Idea"
          paragraph="Yes i am an idealist, this is not because i have my head in th cloud, but because i believe an idea preceed reality. For something to exist in 
          the physical, material realm, it must first exixt as an idea in someones mind. This person are not just ordinary people, but people who has clear thinking mind and doesnt accept 
          any form of mental limitation, this is one of the reasons why we were colonize in the first place, not because we were lesser humans but because in the struggle in civilization, the other side had
           access to unlimited and clear thnking."
        />
      </div>
      <div className="blogCard">
        <BlogItem
          time="1hr ago"
          className="blogimage"
          img={Img3}
          title="The struggle"
          paragraph="imagine a Nigeria where we no longer allow limitation to place in the path of an individual irrespective of their, tribe, religion or sex,where everyone is free to becom who they seems and decide to be.
           imagine a nigeria that lit up by our  most enlightened mind, and which you begins to ask yourself, which part of the struggle are you on? are you on the side of the bias, prejudice and ignorant and blind to 
           unharet custom, tradition and religion  or are you for humanity for elightment for all with the outmost power the internet has given unto you. you as an NGO you has a patriot you as a humanitatarian, and you have
            to ask yourself which part of the struggle are you ON,."
        />
      </div>
      <div className="blogCard">
        <BlogItem
          time="4hr ago"
          className="blogimage"
          img={Img1}
          title="The struggle"
          paragraph="imagine a Nigeria where we no longer allow limitation to place in the path of an individual irrespective of their, tribe, religion or sex,where everyone is free to becom who they seems and decide to be.
           imagine a nigeria that lit up by our  most enlightened mind, and which you begins to ask yourself, which part of the struggle are you on? are you on the side of the bias, prejudice and ignorant and blind to 
           unharet custom, tradition and religion  or are you for humanity for elightment for all with the outmost power the internet has given unto you. you as an NGO you has a patriot you as a humanitatarian, and you have
            to ask yourself which part of the struggle are you ON,."
        />
      </div>
      <div className="blogCard">
        <BlogItem
          time="5hr ago"
          className="blogimage"
          img={Img4}
          title="The struggle"
          paragraph="imagine a Nigeria where we no longer allow limitation to place in the path of an individual irrespective of their, tribe, religion or sex,where everyone is free to becom who they seems and decide to be.
           imagine a nigeria that lit up by our  most enlightened mind, and which you begins to ask yourself, which part of the struggle are you on? are you on the side of the bias, prejudice and ignorant and blind to 
           unharet custom, tradition and religion  or are you for humanity for elightment for all with the outmost power the internet has given unto you. you as an NGO you has a patriot you as a humanitatarian, and you have
            to ask yourself which part of the struggle are you ON,."
        />
      </div>
    </div>
  )
}
