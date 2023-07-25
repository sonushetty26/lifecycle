import React, { Component } from 'react'
import  ReactDOM from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: false
        }
    }

    //props inc
    countHandler () {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num = {this.props.num +1 }/>
            </React.StrictMode> ,document.getElementById("renderHere")
        )
    }

    /*Mount methods*/
    componentWillMount(){
        console.log(`deprecated component will mount called`)
    }

    componentDidMount(){
        console.log(`component did mount called`)
    }

    render(){
        console.log('component rendered')
       return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success"> Counter</h3> 
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center text-success"> Num = {this.props.num} </h1>

                    <div>
                        {
                            this.state.view?
                            (<h1 className='text-center text-success'> Welcome to React Lifecycle</h1>) :
                            (
                                <div>
                                    <h1 className="text-center text-warning">Need More counts</h1>
                                    <button className="btn btn-dark">Increment props</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
       )
    }
}
 // unmount
 //componentWillUnmount(){
 //   console.log(`component unmounted successfully`)
//}
export default Counter