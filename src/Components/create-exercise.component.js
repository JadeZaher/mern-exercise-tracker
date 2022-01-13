import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker";

export default class CreateExercise extends Component {
//set initial state
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription(this);
        this.onChangeDuration = this.onChangeDuration(this);
        this.onChangeDate = this.onChangeDuration(this);
        this.onSubmit = this.onSubmit(this);

        this.state = {
            username : '',
            description: '',
            duration:0,
            date: new Date(),
            users:[]
        }
    };
//life cycle method
//before page load
componentDidMount(){
this.setState({
    users: ['test user'],
    username: 'test user'
})

}
//state tracking
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
//handle form submit
    onSubmit(e) {
        e.PreventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        
        console.log(exercise);
        window.location = '/';
    }
    
//render components
    render(){
        //add exercise

        return(
            <div>
                <h1>Create New Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>username: </label>
                        <select 
                        value={this.state.username}
                        ref='userInput'
                        required
                        className='form-control'
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                     
                                return <option key={user} value={user}>
                                                {user}
                                        </option>
                             })
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input 
                        type="text" 
                        required 
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Duration (in Minutes):</label>
                        <input
                        type='text'
                        className='form-control'
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}