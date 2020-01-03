import React, {Component} from 'react';


class Register extends Component{
    constructor(props){
        super(props); 
        this.state={
            buyItems : ['bread','milk','fruit']
            }      
    }

    clicked = (e) => {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.item.value;
        this.setState({
            buyItems: [...this.state.buyItems,newItem]
        })                       
        this.refs.reset.reset();            
     }

    render() {        
        const {buyItems} = this.state ;
        return(        
            <div className="container">   
                <div className="row">
                        <form ref="reset" className="col-md-3">
                            <div className="form-group">
                                <input type="text" ref={input => this.item = input} className="form-control" name="item" id="item" placeholder="Item"></input>
                                <input type="number" ref="empid" className="form-control" name="empid" id="empid" placeholder="Employee ID"></input>
                                <input type="text" ref="fname" className="form-control" name="fname" id="fname" placeholder="First Name"></input>
                                <input type="text" ref="lname" className="form-control" name="lname" id="lname" placeholder="Last Name"></input>
                                <input type="number" ref="balance" className="form-control" name="balance" id="balance" placeholder="Balance"></input>                        
                            </div>                
                            <button type="submit" className="btn btn-primary" onClick={(e)=>{this.clicked(e);}}>Register</button>
                        </form> 
                </div>  
    
                <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>item</th>                              
                                    <th>Employee ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>                                    
                                    <td>007</td>
                                    <td>James</td>
                                    <td>Bond</td>
                                    <td>7000</td>
                                </tr> 
                                   { buyItems.map(item =>{
                                   return (
                                    <tr key={item}>
                                        <td>{item}</td>                                        
                                        <td>{this.state.empid}</td>
                                        <td>{this.state.fname}</td>
                                        <td>{this.state.lname}</td>
                                        <td>{this.state.balance}</td>
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