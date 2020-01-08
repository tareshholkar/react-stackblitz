import React, {Component} from 'react';
import Home from './home';
import '../card.css';


class Sort extends Component{    
    constructor(props){
        super(props);
        this.state={
            filter:'',
            input: null
        };
        this.myRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        
        this.setState({
          filter: event.target.value 
        });
        
      }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.myRef.current.value
        })
        
        if(this.state.filter ===""){
        alert(` please Select Radio button `);
        }
        this.refs.reset.reset();
        
      }
    render(){       
    return(
            <div className="container landing">
                <div className="row">
                    <div className="col-sm-12">
                    <hr />
                        <h2>Landing Page</h2>
                        <form className="form-inline" role="form" ref="reset" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="name" className="form-control " 
                                placeholder="Enter FilterID" ref={this.myRef}/>
                            
                                <input type="radio" className="form-control" name="filterById" 
                                value="filterById" id="filterById" 
                                onChange={this.handleChange} />
                                <label for="filterById">Filter By ID</label>
                        
                                <input type="radio" className="form-control" name="filterById" 
                                value="filterByAlbumId" id="filterByAlbumId" 
                                onChange={this.handleChange} />
                                <label for="filterByAlbumId">Filter By Album ID</label>
                            </div>

                            <button type="button" className="btn btn-default filter-btn" onClick={this.handleSubmit}>Filter</button>
                        </form>
                    </div>
                </div>
                
                <hr />
                <Home radioButton={this.state.filter} filterId={this.state.input} />
            </div>                    
        );
    }
};

export default Sort;



