import React, {Component} from 'react';
import { connect } from 'react-redux';


class Details extends Component{  
    
   
    render(){
        let values=[];
        values = this.props.array;
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
                            { values.map(c =>{
                                   return (
                                    <tr key={c.employeeId}>                                                                        
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
        );
    }
};


function mapStateToProps(state){
    return {      
          array:state.mainReducer.array  
        }      
}

export default connect(mapStateToProps,null)
(Details);