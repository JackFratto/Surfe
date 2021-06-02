import './Review.css';
import Star from './Star'
import React from 'react';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textValue: '', stars: 1};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.leaveRating = this.leaveRating.bind(this)
    }

    handleChange(event) {
        this.setState({textValue: event.target.value})
    }
    
    leaveRating(event) {
        this.setState({stars: event.target.value})
        //prevent form from submitting on button click
        event.preventDefault();

    }

    handleSubmit(event) {
        console.log("Comment logged " + this.state.textValue)
        console.log("Stars: " + this.state.stars)
        event.preventDefault();
    }

    render() {

        const stars = []
        
        for (let i = 1; i <= 5; i++) {
            stars.push(<Star click={this.leaveRating} value={i} key={"star" + i}/>);
        }

        return(
            <div className="Container">
                <form onSubmit={this.handleSubmit}>
                    <p>Please leave a rating</p>
                    {stars}
                    <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Review;