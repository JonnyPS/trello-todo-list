import React, { Component } from 'react';
import './App.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kjhjkh',
      desc: 'something',
      priority: '5d9f94dc8bdee58e0d78d1ee',
      dateDay: '12',
      dateMonth: '10',
      dateYear: '2019',
      member: '',

    }
    this.myNameChangeHandler = this.myNameChangeHandler.bind(this);
    this.myDescChangeHandler = this.myDescChangeHandler.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state)
  }

  myNameChangeHandler = (event) => {
    this.setState({name: event.target.value})
  }  

  myDescChangeHandler = (event) => {
    this.setState({desc: event.target.value})
  } 

  priorityChangeHandler = (event) => {
    this.setState({priority: event.target.value})
  } 

  memberChangeHandler = (event) => {
    this.setState({member: event.target.value})
  } 

  dateDayChangeHandler = (event) => {
    this.setState({dateDay: event.target.value})
  } 

  dateMonthChangeHandler = (event) => {
    this.setState({dateMonth: event.target.value})
  } 

  dateYearChangeHandler = (event) => {
    this.setState({dateYear: event.target.value})
  }  

  submitForm = (event) => {
    event.preventDefault();
    console.log('submitForm')

    var urlQueries = {
      name: this.state.name,
      desc: this.state.desc,
      priority: this.state.priority,
      dueDate: this.state.dateDay + "-" + this.state.dateMonth + "-" + this.state.dateYear,
      member: this.state.member,
      idList: '5d9f953414248b87ba70af3d',
      API_KEY: process.env.REACT_APP_TRELLO_API_KEY,
      API_TOKEN: process.env.REACT_APP_TRELLO_TOKEN,
      url: () => {
      return "https://api.trello.com/1/cards?name=" + urlQueries.name + "&desc=" + urlQueries.desc + "&due=" + urlQueries.dueDate + "&idLabels=" + urlQueries.priority + "&idMembers=" + urlQueries.member + "&idList=" + urlQueries.idList + "&key=" + urlQueries.API_KEY + "&token=" + urlQueries.API_TOKEN
      }
    }    
      fetch(urlQueries.url(), {  
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
        <h3>Name</h3>
          <input 
            type='text'
            onChange={this.myNameChangeHandler}
          />
          <h3>Description</h3>
          <input 
            type='text'
            onChange={this.myDescChangeHandler}
          />
          <h3>Date (In DD-MM-YYYY format)</h3>
          <input 
            type='text'
            onChange={this.dateDayChangeHandler}
          />
          <input 
            type='text'
            onChange={this.dateMonthChangeHandler}
          />
          <input 
            type='text'
            onChange={this.dateYearChangeHandler}
          />
          <h3>Level of Priority</h3>
          <select onChange={this.priorityChangeHandler}>
            <option value="5d9f94dc8bdee58e0d78d1ee">This is lowest priority</option>
            <option value="5d9f94dc8bdee58e0d78d1ec">This is medium priority</option>
            <option value="5d9f94dc8bdee58e0d78d1ed">This is highest priority</option>
          </select>
          <h3>Member</h3>
          <select onChange={this.memberChangeHandler}>
            <option value="59706920511f4b4d58010565">Member one</option>
            <option value="5bc325980c8d7254db9c0fdb">Member two</option>
          </select>
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
