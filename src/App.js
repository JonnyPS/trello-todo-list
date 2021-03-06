import React, { Component } from 'react';
import './App.css';
// import component
import ResultMessage from './components/result-message.js';

class Form extends Component {
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
      submitted: null
    }
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount', this.state)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state)
  }

  // a generic handler for setting state based on input fields values
  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm = (event) => {
    // stop page reloading automatically
    event.preventDefault();

    var urlQueries = {
      idList: '5d9f953414248b87ba70af3d',
      API_KEY: process.env.REACT_APP_TRELLO_API_KEY,
      API_TOKEN: process.env.REACT_APP_TRELLO_TOKEN,
      url: () => {
      return "https://api.trello.com/1/cards?name=" + this.state.name + "&desc=" + this.state.desc + "&due=" + this.state.dateDay + "-" + this.state.dateMonth + "-" + this.state.dateYear + "&idLabels=" + this.state.priority + "&idMembers=" + this.state.member + "&idList=" + urlQueries.idList + "&key=" + urlQueries.API_KEY + "&token=" + urlQueries.API_TOKEN
      },
      postData: () => {
          fetch(urlQueries.url(), {  
            method: 'POST'
        })
        .then( (data) => {  
          console.log('response: ', data); 
          this.setState({submitted: 'submitted'})
        })  
        .catch( (error) => {  
          console.log('error: ', error);  
          this.setState({submitted: 'notSubmitted'})
        })
      }  
    }
    urlQueries.postData();     
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        <form name="testitout" onSubmit={this.submitForm}>
          <h3>Name</h3>
          <input 
            className='input--standard'
            type='text'
            name="name"
            onChange={this.onChangeHandler}
          />
          <h3>Description</h3>
          <input 
            className='input--standard'
            type='text'
            name="desc"
            onChange={this.onChangeHandler}
          />
          <h3>Date (In DD-MM-YYYY format)</h3>
          <input 
            className='input--small'
            type='text'
            name="dayDate"
            onChange={this.onChangeHandler}
          />
          <input 
            className='input--small'
            type='text'
            name="dayMonth"
            onChange={this.onChangeHandler}
          />
          <input 
            className='input--small'
            type='text'
            name="dayYear"
            onChange={this.onChangeHandler}
          />
          <h3>Level of Priority</h3>
          <select name="priority" onChange={this.onChangeHandler}>
            <option value="5d9f94dc8bdee58e0d78d1ee">This is lowest priority</option>
            <option value="5d9f94dc8bdee58e0d78d1ec">This is medium priority</option>
            <option value="5d9f94dc8bdee58e0d78d1ed">This is highest priority</option>
          </select>
          <h3>Member</h3>
          <select name="member" onChange={this.memberChangeHandler}>
            <option value="59706920511f4b4d58010565">Member one</option>
            <option value="5bc325980c8d7254db9c0fdb">Member two</option>
          </select>
          <input 
            type="submit"
            value="submit"
          />
        </form>
        {
          this.state.submitted === 'submitted'
          ? <ResultMessage message={'success! well done'} classvalue={'success-message'} /> 
          : ( this.state.submitted === 'notSubmitted' 
              ?
                <ResultMessage message={'nuh uh brah!!'} classvalue={'failure-message'} />
              : 
              null 
            ) 
        }
      </div>
    );
  }
}

export default Form;
