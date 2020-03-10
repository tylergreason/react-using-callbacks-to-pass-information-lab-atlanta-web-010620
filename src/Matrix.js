import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#FFF"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}  selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

    setSelectedColor = (newColor) => {
      console.log(newColor)
      this.setState({
        selectedColor:newColor
      })
    }

  render() {
    return (
      <div id="app">
        {/* make color selector element and give it the setSelectedColor function */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}