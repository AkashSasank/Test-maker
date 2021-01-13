import { Component } from "react";
import './style.css'
import api from "../../utils/axios";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.props = {
      questions:[],
      index:1,
    }
  }
  

  state={
    question:''
  }

  componentDidMount(){
    // this.setState({question:this.props.questions[this.props.index]})
    
  }


  render() {
    
        return (
      <div>{console.log(this.props.questions.question_text)}</div>
       
      );
    }
}
