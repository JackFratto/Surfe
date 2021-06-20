import './Review.css';
import Star from './Star'
import React from 'react';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        textValue: '',
        rating: 1,
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.leaveRating = this.leaveRating.bind(this)
        this.changeStars = this.changeStars.bind(this)
    }

    handleChange(event) {
        this.setState({textValue: event.target.value})
    }
    
    leaveRating(event) {
        this.setState({rating: event.target.value})

        console.log(event)
        //prevent form from submitting on button click
        event.preventDefault();
    }

    changeStars(rating){
        this.setState({rating: rating});
    }

    handleSubmit(event) {
        console.log("Comment logged " + this.state.textValue)
        console.log("Stars: " + this.state.rating)
        event.preventDefault();
    }

    render() {
        return(
            <div className="Container">
                <form onSubmit={this.handleSubmit}>
                    <p>Please leave a rating</p>
                    <Star rating={this.state.rating} count={5} active_color={"Yellow"} setRating={this.changeStars} />
                    <textarea type="text" value={this.state.textValue} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Review;