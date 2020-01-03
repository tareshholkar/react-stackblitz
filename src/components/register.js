import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeId: '',
            firstName: '',
            lastName: '',
            balance: '',
            values: []
        }
    }

    clicked = (e) => {
        e.preventDefault();
        let tempUser = {
            "employeeId": this.refs.empid.value,
            "firstName": this.refs.fname.value,
            "lastName": this.refs.lname.value,
            "balance": this.refs.balance.value
        }

        let tempValues = [...this.state.values];
        tempValues.push(tempUser)
        console.log('temValues', tempValues)
        this.setState({
            values: [...tempValues]
        }, () => { console.log(this.state.values) });      
        this.refs.reset.reset();
    }

    render() {        
        return (
            <div className="container">
                <div className="row">
                    <form ref="reset" className="col-md-3">
                        <div className="form-group">
                            <input type="number" ref="empid" className="form-control" name="empid" id="empid" placeholder="Employee ID"></input>
                            <input type="text" ref="fname" className="form-control" name="fname" id="fname" placeholder="First Name"></input>
                            <input type="text" ref="lname" className="form-control" name="lname" id="lname" placeholder="Last Name"></input>
                            <input type="number" ref="balance" className="form-control" name="balance" id="balance" placeholder="Balance"></input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => { this.clicked(e); }}>Register</button>
                    </form>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>                               
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>007</td>
                                <td>James</td>
                                <td>Bond</td>
                                <td>7000</td>
                            </tr>                            
                            { this.state.values.map(c =>{
                                   return (
                                    <tr key={c}>                                                                        
                                        <td>{c.employeeId}</td>
                                        <td>{c.firstName}</td>
                                        <td>{c.lastName}</td>
                                        <td>{c.balance}</td>
                                    </tr>
                                        )
                                    })
                                   }              
                               
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Register;