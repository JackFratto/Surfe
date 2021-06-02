const Star = ({click, value}) => {
  constructor(props) {
    super(props)

    this.state = {fill: none};
  }



  return (
    //<button onClick={click} value={value}>{value}</button>
    <svg 
    width="58" 
    height="58" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#393939" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    value={value}
    >
      <polygon 
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      onMouseEnter={}/>
    </svg>

  )
}

export default Star;