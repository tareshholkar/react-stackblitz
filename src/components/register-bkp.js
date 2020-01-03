import React, {Component} from 'react';


class Register extends Component{
    constructor(props){
        super(props); 
        this.state={
        buyItem:[{    
            empid : null,
            fname : null,
            lname : null,
            balance : null
        }]      
    }

    clicked = (e) => {
        e.preventDefault();
        // const {buyItem} = this.state;
        // const newItem = 'test';

        // this.setState({
        //     butItem : [...this.state.buyItem,newItem],  
        // })
         this.setState({
             empid : this.refs.empid.value,
             fname : this.refs.fname.value,
             lname : this.refs.lname.value,
             balance : this.refs.balance.value,
         }, ()=>  console.log('data ' +  this.state.empid,this.state.fname,this.state.lname,this.state.balance))        
                
         this.refs.reset.reset();    
        
     }

    render(){        
        // const {buyItems} = this.state ;
        return(        
            <div className="container">   
                <div className="row">
                        <form ref="reset" className="col-md-3">
                            <div className="form-group">
                                <input type="number" ref="empid" className="form-control" name="empid" id="empid" placeholder="Employee ID"></input>
                                <input type="text" ref="fname" className="form-control" name="fname" id="fname" placeholder="First Name"></input>
                                <input type="text" ref="lname" className="form-control" name="lname" id="lname" placeholder="Last Name"></input>
                                <input type="number" ref="balance" className="form-control" name="balance" id="balance" placeholder="Balance"></input>                        
                            </div>                
                            <button  className="btn btn-primary" onClick={(e)=>{this.clicked(e);}}>Register</button>
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
                                   {/* { buyItem.map(item =>{
                                   return (
                                    <tr key={item}>
                                        <td>{item}</td>                                        
                                        <td>{this.state.empid}</td>
                                        <td>{this.state.fname}</td>
                                        <td>{this.state.lname}</td>
                                        <td>{this.state.balance}</td>
                                    </tr>
                                        );
                                    })
                                   }                             */}
                            </tbody>
                        </table>   
                </div>             
            </div>
        );
    }
}


export default Register;