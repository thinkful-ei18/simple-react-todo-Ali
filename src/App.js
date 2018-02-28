import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import Card from './Card'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  /* ========== Update store with new notes appended and increment key ========== */
  updateNote(text) {
    this.setState({ notes: [...this.state.notes, { text }] });
  }

  /* ========== Delete note via key matching to store ========== */
  deleteNote(key) {
    let arr = this.state.notes.filter((note, index) => index !== key)
    this.setState({ notes: [...arr] });
  }
  
  /* ========== Map over state.note array to render list of notes ========== */
  NoteList() {
    return this.state.notes.map((note, index) => <Card title={note.text} key={index} noteKey={index} delete={key => this.deleteNote(key)}/>)
  }
  
  render() {
    return (
      <div className="App">
        <h1>Noteful</h1>
        <Input addNote={text => this.updateNote(text)}/>
        {this.NoteList()}
      </div>
    );
  }
}

export default App;
