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
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        // this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

    //   submituserRegistrationForm(e) {
    //     e.preventDefault();
       
  
    //   }

      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["empid"]) {
            formIsValid = false;
            errors["empid"] = "*Please enter your Employee ID.";
        }    
        if (typeof fields["empid"] !== "undefined") {
            if (!fields["empid"].match(/^[0-9]*$/)) {
              formIsValid = false;
              errors["empid"] = "*Please enter valid Employee ID.";
            }
        }

        
        if (!fields["fname"]) {
            formIsValid = false;
            errors["fname"] = "*Please enter your First Name.";
        }
        if (typeof fields["fname"] !== "undefined") {
            if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["fname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "*Please enter your Last Name.";
        }
        if (typeof fields["lname"] !== "undefined") {
            if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["lname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["balance"]) {
            formIsValid = false;
            errors["balance"] = "*Please enter your Balance.";
        }    
        if (typeof fields["balance"] !== "undefined") {
            if (!fields["balance"].match(/^[0-9]*$/)) {
              formIsValid = false;
              errors["balance"] = "*Please enter valid Balance.";
            }
        }
        this.setState({
            errors: errors            
          });
          console.log("errors",this.state.errors.empid);
          return formIsValid;

    }
    clicked = (e) => {
        e.preventDefault();
        let tempUser = {
            "employeeId": this.refs.empid.value,
            "firstName": this.refs.fname.value,
            "lastName": this.refs.lname.value,
            "balance": this.refs.balance.value
        }
        if (this.validateForm()) {
            this.props.get_Array(tempUser); 

            let fields = {};
            fields["empid"] = "";
            fields["fname"] = "";
            fields["lname"] = "";
            fields["balance"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
          
        this.refs.reset.reset();
    }

    render() {        
        return (
            <div className="container">
                <div className="row">
                    <form ref="reset" className="col-md-3" onSubmit= {this.clicked}>
                        <div className="form-group">
                            <input type="text" ref="empid" className="form-control register" name="empid" id="empid" placeholder="Employee ID"  value={this.state.fields.empid} onChange={this.handleChange}></input>
                            <span className="errorMsg">{this.state.errors.empid}</span>
                            <input type="text" ref="fname" className="form-control register" name="fname" id="fname" placeholder="First Name" value={this.state.fields.fname} onChange={this.handleChange}></input>
                            <span className="errorMsg">{this.state.errors.fname}</span>
                            <input type="text" ref="lname" className="form-control register" name="lname" id="lname" placeholder="Last Name" value={this.state.fields.lname} onChange={this.handleChange}></input>
                            <span className="errorMsg">{this.state.errors.lname}</span>
                            <input type="text" ref="balance" className="form-control register" name="balance" id="balance" placeholder="Balance" value={this.state.fields.balance} onChange={this.handleChange}></input>
                            <span className="errorMsg">{this.state.errors.balance}</span>
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


