'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke });
      });
  }

  render() {
    console.log("---- RENDER ----");

    return (
        <div>
          <button onClick={this.onTellJoke}>Tell me a joke</button>
          <p>{this.state.joke}</p>
        </div>
      );
  }
}

const domContainer = document.querySelector('#dadjokes');
ReactDOM.render(e(LikeButton), domContainer);
