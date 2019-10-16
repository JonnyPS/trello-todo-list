import React, { Component } from 'react';
import './App.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kjhjkh',
      desc: 'something'
    }
    this.myNameChangeHandler = this.myNameChangeHandler.bind(this);
    this.myDescChangeHandler = this.myDescChangeHandler.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  myNameChangeHandler = (event) => {
    this.setState({name: event.target.value})
  }  

  myDescChangeHandler = (event) => {
    this.setState({desc: event.target.value})
  }  

  submitForm = (event) => {
    event.preventDefault();
    console.log('submitForm')
    const API_KEY = process.env.REACT_APP_TRELLO_API_KEY;
    const API_TOKEN = process.env.REACT_APP_TRELLO_TOKEN;
    let nameDeets = 'name='+this.state.name; 
    let cardDesc =  'desc='+this.state.desc;
    let url = "https://api.trello.com/1/cards?"+nameDeets+"&"+cardDesc+"&pos=bottom&due='01-01-2020'&dueComplete=false&idList=5d9f953414248b87ba70af3d&keepFromSource=all&idMembers=59706920511f4b4d58010565&idLabels=5d9f94dc8bdee58e0d78d1f7&key="+API_KEY+"&token="+API_TOKEN
      fetch(url, {  
          method: 'POST',  
          // headers: {  
          //   'auth': '1234'  
          // },  
        //    body: JSON.stringify({
        //   name: 'dean',
        //   login: 'dean',
        // })
      })
      .then(function (data) {  
        console.log('Request success: ', data);  
      })  
      .catch(function (error) {  
        console.log('Request failure: ', error);  
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <form name="testitout" onSubmit={this.submitForm}>
          <input 
            type='text'
            onChange={this.myNameChangeHandler}
          />
          <input 
            type='text'
            onChange={this.myDescChangeHandler}
          />
          <input 
            type="submit"
            value="submit"
          />
        </form>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Details;
