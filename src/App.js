import React from "react";
import axios from 'axios';
import './App.css';
class App extends React.Component{
    state = {
        advice:''
    };
    componentDidMount(){
        this.fetchadviceice();
    }
    fetchadviceice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            this.setState({advice })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render(){
        const {advice} = this.state;
        return(
            <div className="page">   
                <div className="cardd">
                    <h1 className="typoo">{advice}</h1> 
                    <button className="but" onClick={this.fetchadviceice}>
                        <span>ONE MORE !</span></button>   
                </div> 
            </div>
        );
    }
}
export default App