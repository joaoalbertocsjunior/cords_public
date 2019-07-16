import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
      MainContainer: {backgroundColor: "#282c34", display: "flex", minHeight: "100vh"},
      ObjectMap: [],
    }
    this._createObject = this._createObject.bind(this);
    this._createBox = this._createBox.bind(this);
    this._buttonCreateBox1 = this._buttonCreateBox1.bind(this);
    this._dragTask = this._dragTask.bind(this);
  }

  _createObject = (object) => {
    var ObjectMap = this.state.ObjectMap;
    ObjectMap.push(object);
    this.setState({ObjectMap: ObjectMap});
  }

  _createBox = (style) => {
    var object = {position: "absolute", top: this.state.positionX, left: this.state.positionY};
    var styleObject = Object.assign({},
      object, style
    )
    return (
      <div style={styleObject} draggable="true" onDragEnd={(event) => {this._dragTask(event)}}>

      </div>
      );
    
  }

  _dragTask(event) {
    event.persist();
    this.setState({positionX: event.screenX, positionY: event.screenY}, () => { console.log("Page X:"+ this.state.positionX + " Page Y:" + this.state.positionY); });
  }

  _buttonCreateBox1 = () => {
    this._createObject(this._createBox({backgroundColor: "white", width: "300px", height: "300px"}));
  }

  render() {
    return (
      <div style={this.state.MainContainer}>
        <button type="button" onClick={ this._buttonCreateBox1 }>Click Me!</button>
        {
          this.state.ObjectMap.map((item, index) => {
            return item
          })
        }
      </div>
    );
  }
}
export default App;
