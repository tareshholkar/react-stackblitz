import React, {Component} from 'react';
import '../card.css';

class Card extends Component{    
    render(){       
    return(
        
                <div className="col-sm-4">
                    <div className="details">
                        <h3>CardID : {this.props.id}</h3>
                        <p>Card AlbumID : {this.props.albumId}</p>
                        <img src={this.props.url} />
                    </div>           
                </div>
           
        );
    }
};

export default Card;
