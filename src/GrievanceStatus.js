import React, { Component } from 'react';
import './GrievanceStatus.css';


export class GrievanceStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: new Array(20).fill(null),
        }
    }
    handleStatus = (index, event) => {
        let cStatus = [...this.state.status];
        if (event.target.value === "resolve") {
            cStatus.splice(index, 1, "Resolved")
        } else {
            cStatus.splice(index, 1, "Rejected")
        }
        console.log('Status', cStatus)
        this.setState({ status: cStatus});
        // cStatus.map((item) => console.log(`inside map ${item}`))
    }



    render() {
        const grievance = this.props.data.map((item, index) => {
            const x = this.state.status[index]==='Resolved'?{color:'Green'}:{color:'Red'};
            if (item.status === null) {
                return (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td style={x}>{this.state.status[index]}</td>
                        <td>
                            <button disabled={this.state.status[index]} type="button" id='resolve'  value="resolve" onClick={(event) => this.handleStatus(index, event)}>Resolve</button><br />
                            <button disabled={this.state.status[index]} type="button" id='reject'  value="reject" onClick={(event) => this.handleStatus(index, event)}>Reject</button>
                        </td>
                    </tr>

                )
            } else {
                return (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>{this.state.status}</td>
                    </tr>

                )

            }
        })
        return (
            <div className="container">
                
                <table cellSpacing="2" cellPadding="4">
                    <thead>
                        <tr>
                            <th>Email Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grievance}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default GrievanceStatus;
