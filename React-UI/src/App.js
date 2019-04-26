import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Notes from './Person/Notes'
import Content from './Person/Content'
import Favorites from './Person/Favorites'
import  './Person/Notes.css'

class App extends Component {
  state = {
    isOpen: false,
    input:'',
    activities : [
        { name: 'Fun' },
        { name: 'Foods' },
        { name: 'Sun' },
        { name: 'Kids' }
    ],
    favorites :[
        { id:'f1', title: 'Visit to Lake Tahoe',
            desc:'Trip Date - Dec, 2014', image:'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { id:'f2', title: 'World of Avatar',
            desc: 'Plan it soon', image: 'https://idigitalcitizen.files.wordpress.com/2010/04/attack41920x1080.jpg'},
        { id:'f3', title: 'The Hogwarts Express',
            desc: 'Summer 2012', image:'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { id:'f4', title: 'The Grand Canyan',
            desc: 'December 2013', image:'https://media.gettyimages.com/photos/grand-canyon-national-park-view-picture-id697996602'},
        { id:'f5', title: 'The Eifel Tower',
            desc:'Plan for later', image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
        { id:'f6', title: 'The London Bridge',
            desc: 'Spring 2011', image: 'https://cdn.londonandpartners.com/visit/london-organisations/tower-bridge/86830-640x360-tower-bridge-640.jpg'},
        { id:'f7', title: 'Thames River Ride',
            desc: 'Spring 2011' ,image: 'http://www.aboutbritain.com/images/articles/big/river-thames-london-eye-119990824.jpg'},
        { id:'f8', title: 'Fall Colors',
            desc: 'Fall Every Year', image: 'https://cdn.wallpapersafari.com/29/55/jRweLk.jpg'},
        { id:'f9', title: 'Lord of the Rings',
            desc: 'Greatest fantasy ever', image: 'https://pbs.twimg.com/profile_images/446105942271479808/Z1MlbMyv.jpeg'},
        { id:'f10',title: 'Walk in the Park',
            desc:'Every Week', image: 'https://image.shutterstock.com/image-photo/young-fitness-woman-hiker-legs-450w-219757786.jpg'}

        ],
    myNotes : [
          {desc: 'Pay the utility bills'},
          {desc: 'The new taco place opens 5/3'},
          {desc: 'I have a project demo'}
    ],
      addNote: true
  };

    handleChange = (event) => {
     this.setState({input:event.target.value});
    };

    showNote = () => {
      const addNote = this.state.myNotes.slice();
      addNote.push({desc: this.state.input});
      this.setState({myNotes: addNote});
    };

    deleteNote = (noteIndex) => {
        const notes = [...this.state.myNotes];
        notes.splice(noteIndex,1);
        this.setState({myNotes:notes});
    };

  render() {
      let notes = null;
          notes = (
              <div>
                  {this.state.myNotes.map((note, index) => {
                      return <Content click={()=>this.deleteNote(index)} key={note.id}>{note.desc}</Content>
                  })}
              </div>
          );

      let favs = null;
      favs = (
        <div className={"BorderBox"}>
            {this.state.favorites.map( fav => {
                return <Favorites picture={fav.image} title={fav.title}>{fav.desc}</Favorites>
            })}
        </div>
      );

      let dairyEntry = null;
      dairyEntry = (
          <div className={"Notes"}>
                  <input className={"Input"}  onChange={this.handleChange}
                         type={"text"} placeholder={"Enter your note"}/>
                  <button onClick={this.showNote}>Save</button>
          </div>
  );

      return (
          <div className="App">
            <h1><u>MEMOIRS - Dairy Keeping</u></h1>
              <Person/>
              <h3>ALL TIME FAVORITES</h3>
              {favs}
              <h3>THINGS TO DO</h3>
              {dairyEntry}
              {notes}
          </div>
    );
  }
}

export default App;
