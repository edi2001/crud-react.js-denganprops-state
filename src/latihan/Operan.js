import React, { Component } from 'react'

export default class Operan extends Component {


  render() {
    return (
      <div>
          <h2>operan state yang akan menjasi props:{this.props.makanan}</h2>
          <button onClick={()=>this.props.gantiMakanan("soto")}>ganti makanan</button>

      </div>
    )
  }
}
