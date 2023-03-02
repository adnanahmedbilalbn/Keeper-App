import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Notes from "../notes.js"
import Note from "./Note"




function App (){
    return(
    <div>
        <Heading/>

            {Notes.map( (props)=> {

                return (
                  <Note 
                      key = {props.key}
                      title = {props.title}
                      content = {props.content}
                  />
                )
            })}
     
        <Footer />
    </div>
    )
}

export default App;