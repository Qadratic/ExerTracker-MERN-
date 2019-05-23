import React, { Component, Fragment } from 'react';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }

        console.log(user);
        this.setState({
            username: ''
        });
    }
    render() {
        return (
            <Fragment>
                <h3>Create new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Create User' className='btn btn-primary' />
                    </div>
                </form>
            </Fragment>
        );
    }
}