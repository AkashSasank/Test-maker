import { Component } from "react";
import './style.css'
import api from "../../utils/axios";


class Pill extends Component{
  constructor(props) {
    super(props);
    this.props = {
      value:'',
      status:'to-do',
      color:'bg-primary'
    }
  }

  setQuestionNumber = ()=>{
    localStorage.setItem("q", this.props.value===0?0:this.props.value-1);
    console.log(localStorage.getItem("q"))
  }


  render(){
    return(
      <button class={"button col-sm border border-dark rounded p-1 "+ this.props.color} onClick={this.setQuestionNumber}>
      {this.props.value}
    </button>
    )
  }
}

export default class QuestionNavBlock extends Component {
  constructor(props) {
    super(props);
    this.props = {
      num_questions:0,
    }
  }

  componentDidMount(){
    localStorage.setItem("q", 0)
  }

  render() {
    const items = []
    let num_rows = Math.ceil(Math.sqrt(this.props.num_questions))
    let num_cols = Math.ceil(this.props.num_questions/num_rows)
    for(let row = 0;row<num_rows;row++) {

      const row_data = []
      for(let col = 1;col<=num_cols;col++) {
      
        let num = row*num_cols+col;
        if(num<=this.props.num_questions){

          row_data.push(
          <Pill value={num} color='bg-primary'></Pill>
          )  
        }   
      }

      items.push(
          <div class="row flex-nowrap">
            {row_data}
          </div>
                )
    
            
            
    }
      return (
        <div >
          <table class="table d-flex justify-content-center">
            <tbody>
            {
           items
          }
            </tbody>
          </table>
         
        </div>
       
      );
    }
}
