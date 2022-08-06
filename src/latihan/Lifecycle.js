import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: 'Basko',
            data:{},
            tampilhalamanSub:false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response =>response.json())
            .then((json)=>{
                this.setState({
                    data:json
                })
            })
    }

    ubahMakanan(value){
        this.setState({
            makanan:value
        })
    }

    render() {
        return (
            <div>   
                <h2>{this.state.makanan}</h2>
                {this.state.tampilhalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
                <button onClick={()=>this.setState({tampilhalamanSub:!this.state.tampilhalamanSub})}>Tampilkan halaman sub</button>
            </div>
        )
    }
}
