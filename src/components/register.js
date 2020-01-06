import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {make_Array} from '../redux/action/action' 

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
        this.props.get_Array(tempUser);

        // let tempValues = [...this.state.values];
        // tempValues.push(tempUser)
        // console.log('temValues', tempValues)
        // this.setState({
        //     values: [...tempValues]
        // }, () => { console.log(this.state.values) });      
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

                
            </div>
        );
    }
}
 


function mapDispatchToProps(dispatch){
    return {      
        get_Array : bindActionCreators(make_Array, dispatch),
        }      
}
  

export default connect(null,mapDispatchToProps)
(Register);


