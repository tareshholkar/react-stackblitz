import React, {Component} from 'react';
import Card from './card';
import axios from 'axios';
import CardNotFound from './cardnotfound';
import '../card.css';

var cards;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
          component3: null
        }
      }
    
    componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const mainData = res.data.filter(item => item.id <= 250); 

        this.setState({ mainData });

        cards = this.state.mainData.map(item => 
            <Card albumId={item.albumId} id={item.id} url={item.url} />)
        this.setState({
            component3: cards
            })
      })
  }

  componentWillReceiveProps (newProps) {
      console.log("newProps",newProps)
     axios.get(`https://jsonplaceholder.typicode.com/photos`)
       .then(res => {
        // console.log('filter',this.props.filterId)
         console.log("newProps",newProps)
         const mainData = this.props.radioButton=== "filterById" ? res.data.filter(item => item.id == newProps.filterId ) : res.data.filter(item => item.albumId == newProps.filterId );
         
         this.setState({ mainData });
        console.log("mainData", mainData);
         cards = this.state.mainData.map(c => 
            <Card albumId={c.albumId} id={c.id} url={c.url} />)
        this.setState({
            component3: cards
            })
       })
    }

  
 

  render() {
    let condition = (this.props.filterId == "" && !this.props.radioButton =="" ||this.props.filterId == null && !this.props.radioButton ==""|| this.props.filterId == undefined && !this.props.radioButton =="" );
    return (
    <div className="container">
        <div className="row">
        {!condition?this.state.component3:<CardNotFound/>}        
        </div>
    </div>
    
    )
  }
}



