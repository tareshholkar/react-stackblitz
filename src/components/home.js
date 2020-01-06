import React, {Component} from 'react';
import Card from './card';
import axios from 'axios';
import '../card.css';


export default class Home extends Component {
  state = {
    mainData: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const mainData = res.data.filter(item => item.id <= 250);         
        this.setState({ mainData });
      })
  }

  render() {
    return (
    <div className="container">
        <div className="row">
         { this.state.mainData.map(c => 
            <Card albumId={c.albumId} id={c.id} url={c.url} />
         )}
        </div>
    </div>
    
    )
  }
}

