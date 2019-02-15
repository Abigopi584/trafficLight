import React from 'react';
import Bootstrap from 'react-bootstrap';
import FontAwesomeIcon  from 'react-fontawesome';


class TrafficLight extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:['green','transparent','transparent'],
            selectedMsg:'Now you can Go',
            spin:true
        }
    }
    componentDidMount(){
        this.timerID = setInterval(()=> this.changeColor(),1500)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    changeColor(){
        let index =Math.floor(Math.random() * 3);
        if (index === 0){
            this.setState({
                color:['green','transparent','transparent'],
                selectedMsg:'Now you can Go',
                spin:true
            })
        } else if(index === 1){
            this.setState({
                color:['transparent','yellow','transparent'],
                selectedMsg:'Watch and Walk',spin:false

            })
        } else {
            this.setState({
                color:['transparent','transparent','red'],
                selectedMsg:'Stop for All Vehicles',spin:false
            })
        }

    }

    render(){
        const spin = this.state.spin;
        let spinner;
        if(spin){
            spinner= <i className="fa fa-hourglass-start fa-3x fa-spin 2s linear"  rotate={90} style={{marginTop:'45px'}}></i>
        } else {
            spinner= <i className="fa fa-hourglass-start fa-3x"  rotate={90} style={{marginTop:'45px'}}></i>
        }
        return(
            <div>
                <div style={{textAlign:'center'}}>
                    <h1>Traffic Signal</h1>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"40px"}}>
                    <div style={{height:"400px",width:"100px",border: "1px solid black"}}>
                        <div className="green" style={{height:"33%",border:"1px solid black",textAlign:'center' ,backgroundColor: this.state.color[0]}}>
                            {spinner}
                        </div>
                        <div className="yellow" style={{height:"33%", border:"1px solid black",textAlign:'center',backgroundColor:this.state.color[1]}}>
                            <FontAwesomeIcon name="eye" size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' ,marginTop:'45px' }} />
                        </div>
                        <div className="red" style={{height:"33%",border:"1px solid black",textAlign:'center', backgroundColor:this.state.color[2]}}>
                            <FontAwesomeIcon name="stop-circle" size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',marginTop:'45px' }} />
                        </div>
                    </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <h3>{this.state.selectedMsg}</h3>
                </div>
                <div>

                </div>
            </div>
        )

    }
 }
export default TrafficLight;


