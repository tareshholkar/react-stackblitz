import React, {Component} from 'react';


class Details extends Component{  

    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
     }
    render(){
    return(
        <div className="container">
            
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
                                <tr>
                                    <td>{this.props.empid}</td>
                                    <td>{this.props.fname}</td>
                                    <td>{this.props.lname}</td>
                                    <td>{this.props.balance}</td>
                                </tr>
                            </tbody>
                </table>
            
        </div>
        );
    }
};

export default Details;