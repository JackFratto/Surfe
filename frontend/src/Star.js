import React from 'react'
import PropTypes from 'prop-types'


class Star extends React.Component {

  constructor(props) {
    super(props)
    
    Object.assign({}, props)

    this.state = {
      stars: [],
      rating: props.rating || -1
    }
    this.state.config = {
      count: props.count,
      active_color: props.active_color,
    }
    this.handleMouseClick = this.handleMouseClick.bind(this);

  }

  handleMouseClick(event) {
    let index = Number(event.target.getAttribute('data-index'))

    const stars = this.state.stars
    this.props.setRating(index + 1)

    for(let i = this.state.rating + 1; i <= index; i++) {
      stars[i].active = true
    }
    this.setState({
      stars: stars,
      rating: index
    })


  }

  createStars(amt) {
    let stars = [];
    for(let i = 0; i < amt; i++) {
      stars.push({active: i <= this.state.rating})
    }
    this.setState({stars: stars})
    
  }

  componentDidMount() {
    this.createStars(this.state.config.count);
  }

 componentDidUpdate(prevProps, prevState) {
    if(prevState.rating !== this.state.rating) {
      let stars  = this.state.stars;
      for(let i = this.state.rating + 1; i <= prevState.rating; i++){
        stars[i] = {active: false};
      }
  
      this.setState({stars: stars});

    }
  }

  render() {
    return this.state.stars.map((star, index) => {
      return (
        <span
        className="star"
        key={'star-' + index}
        onClick= {this.handleMouseClick}
        data-index={index}
        style={{color: star.active ? 'gold' : 'white', cursor: 'pointer', fontSize: `${40}px`}}>&#9733;</span>
          /*<svg 
          width="58" 
          height="58" 
          viewBox="0 0 24 24"
          key= {'star-' + index}
          onClick= {this.handleMouseClick}
          fill={star.active ? this.state.config.active_color: "None"}
          data-index={index}
          stroke="#393939" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          >
            <polygon 
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>   */     
      )
    })
  }
}

Star.propTypes = {
  rating: PropTypes.number
}

export default Star;