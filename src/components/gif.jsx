import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const src = `https://media3.giphy.com/media/${this.props.id}/100w.webp?cid=ecf05e47n2mtup4n4eewaa4cwycqz5gfg0vc3v3lch75724p&rid=100w.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
