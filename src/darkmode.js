import React from 'react'

class Display extends React.Component{
    constructor () {
        super () 
        this.state = {
            isToggle : true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange () {
        this.setState ((prevState) => {
            return {
                isToggle : !prevState.isToggle
            }
            
        })
        document.body.style.background = this.state.isToggle ? 'black' : 'white'
    }
    render () {
        return (
            <div >
                <button onClick = {this.handleChange}>{this.state.isToggle ? "dark" : "white"}</button>
            </div>
        )
    }
}
export default Display