class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          interval: 0
      };
    }
    
    scroll() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.interval);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let interval = setInterval(this.scroll.bind(this), this.props.delayInMs);
      this.setState({ intervalId: interval });
    }
    
    render () {
        return <button title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                    <img src='../assets/arrow_up.svg' alt='scroll up arrow'/>
                </button>;
     }
  } 
  