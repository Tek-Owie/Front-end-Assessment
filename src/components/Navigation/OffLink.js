function offLink(event) {
    if (this.props.savedHref !== '/cart') {
      event.preventDefault() 
    }   
  }
  
    export default offLink;