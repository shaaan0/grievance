import React, { Component } from 'react';
import GrievanceStatus from './GrievanceStatus';
// import Header from './Header';
import './FormDetails.css';

// import form
export class FormDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            title: '',
            description: '',
            details: [],
        }
    }
    validateDetails = () => {
        if (this.state.description === '' || this.state.title === '' || this.state.email === '') {
            return false;
        }
        return true;
    }

    handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateDetails()) {
            const detail = { "email": this.state.email, "title": this.state.title, "desc": this.state.description, "status": null };
            const prevDetails = [...this.state.details,detail];
            this.setState({ details: prevDetails });
            this.setState({ email: '', title: '', description: '' })

        } else {
            alert(`Please Fill all the Details`);
        }

    }


    render() {
        return (
            <>
                <div className='column'>
                    <div className='card'>
                        <h2>Grievance Form</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>Email:
                    <input type="text" className='boxes' name="email" value={this.state.email} onChange={this.handleChanges} />
                            </label>
                            <br />
                            <label>
                                Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChanges} />
                            </label>
                            <br />
                            <label>
                                Description:
                    <br />
                                <textarea name="description" value={this.state.description} rows="4" cols="50" onChange={this.handleChanges} />

                            </label>
                            <br />
                            <button id="submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <h2>Complaints</h2>
                    <GrievanceStatus data={this.state.details} />
                </div>
            </>


        )
    }
}

export default FormDetails
