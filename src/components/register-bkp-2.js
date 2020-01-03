import React from 'react';
import './Comp1.css';

class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      firstName: '',
      lastName: '',
      balance: '',
      values: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    if (event.target.name == "employeeId") {
      this.setState({
        employeeId: event.target.value
      })
    } else if (event.target.name == 'firstName') {
      this.setState({
        firstName: event.target.value
      })
    }
    else if (event.target.name == 'lastName') {
      this.setState({
        lastName: event.target.value
      })
    }
    else if (event.target.name == 'balance') {
      this.setState({
        balance: event.target.value
      })
    }
    // console.log('abciijiji', this.state.employeeId)
    // console.log('abciijiji', this.state.firstName)
    // console.log('abciijiji', this.state.lastName)
    // console.log('abciijiji', this.state.balance)
  };

  handleAdd = (event) => {
    event.preventDefault();
    event.persist();
    let temUser = { 
      "employeeId": this.state.employeeId,
       "firstName": this.state.firstName,
        "lastName": this.state.lastName,
         "balance": this.state.balance 
    }
    let temValues = [...this.state.values];
    temValues.push(temUser)
    console.log('temValues',temValues)
    this.setState({
      values: [...temValues]
    },() => {console.log(this.state.values)});
    
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleAdd}>
          <label>Employee ID </label>
          <input type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleChange} />
          <label>FirstName</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          <label>LastName</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          <label>Balance</label>
          <input type="text" name="balance" value={this.state.balance} onChange={this.handleChange} />
          <button className="btn-add">Add</button>
        </form>
      </div>
    );
  }
}

export default Component1;

