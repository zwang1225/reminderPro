import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, deleteAll } from '../actions';
import PropTypes from 'prop-types';
import moment from 'moment';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      dueDate:''
    }
  }

  addReminder(){
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id){
    this.props.deleteReminder(id)
  }

  deleteAll(){
    this.props.deleteAll();
  }

  renderReminders(){
    const { reminders } = this.props;
    return(
      <ul className="list-group mt-2">
            {
              reminders.map(reminder => {
                return (
                  <li key={ reminder.id } className="list-group-item">
                    <div className="list-item">
                      <div>{ reminder.text }</div>
                      <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                    </div>
                    <div className='list-item delete-button'
                    onClick={()=>this.deleteReminder(reminder.id)}
                    >&#x2715;</div>
                  </li>
                );
              })
            }
          </ul>
    )
  }

  render() {
    return (
      <div className="App container">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input type="text" 
            className="form-control" 
            placeholder="I have to..." 
            onChange={(e)=>{this.setState({text: e.target.value})}}/>
          </div>
          <div className='form-group'>
            <input type='datetime-local'
            className='form-control'
            onChange={(e)=>{this.setState({dueDate: e.target.value})}}/>
          </div>
          <button type="button" className="btn btn-success" onClick={this.addReminder.bind(this)}>Add Reminder</button>
        </div>
        <div className='col-sm-8'>
            {this.renderReminders()}
        </div>
        <div>
          <button className='btn btn-danger mt-5'
          onClick={this.deleteAll.bind(this)}>clear all</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  reminders: state
});

App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {addReminder: addReminder, deleteReminder: deleteReminder, deleteAll: deleteAll})(App);