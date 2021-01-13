import React from 'react';
import { App, AppHeader} from './style';
import api from '../../utils/axios';
import QuestionNavBlock from '../../components/QuestionNavBlock';
export default class TestPage extends React.Component {
  
  state = {
    questions : [], 
    count: 0,
    question_text:'',
    choice_list:[],
    q_num:0,
    uuid:'',
    category:''
  }

  componentDidMount(){
    localStorage.setItem("q",0)
    let testID = this.props.match.params['testId']
    api.get(`tests/`+testID+'/')
    .then(res => {
      const r = res.data[0];
      const questions = r.question_list;
      const current_question = r.question_list[parseInt(localStorage.getItem("q"))];
      this.setState(
        {
          questions: questions,
          count: questions.length,
          question_text: current_question.question_text,
          choice_list:current_question.choice_list,
          uuid:current_question.uuid,
          category:current_question.category
          }
          )

    })
  }
  setQuestion = ()=>{
    let q_num = parseInt(localStorage.getItem("q"))
    const current_question = this.state.questions[q_num];
    this.setState({
      q_num:q_num,
      question_text: current_question.question_text,
      choice_list:current_question.choice_list,
      uuid:current_question.uuid,
      category:current_question.category

    })

  }

  nextQuestion = ()=>{
    let next_q = this.state.q_num === this.state.count-1?0:this.state.q_num+1
    this.setNextQuestion(next_q)
  }

 previousQuestion = ()=>{
    let next_q = this.state.q_num === 0?this.state.count-1:this.state.q_num-1
    this.setNextQuestion(next_q)
  }

  setNextQuestion =(q_num)=>{
    localStorage.setItem("q", q_num)
    const current_question = this.state.questions[q_num];
    this.setState({
      q_num:q_num,
      question_text: current_question.question_text,
      choice_list:current_question.choice_list,
      uuid:current_question.uuid,
      category:current_question.category
    })
  }

  render(){
    return (
      <App>
        <AppHeader>   
          <div class="d-flex flex-wrap justify-content-around w-100">
            {/* Question card */}

            <div class="container w-100 p-5 bg-dark rounded shadow-lg ">
              <div class="d-flex justify-content-between">

              <h5>Question {this.state.q_num+1}</h5>
              <h5>Category: {this.state.category}</h5>

              </div>
            {/* <Question  questions={this.state.questions[1]}></Question> */}
            <div class="card text-white bg-secondary mb-3 w-100">
                <div class="card-header "><h3>{this.state.question_text}</h3></div>

                <div class="card-body left">
                  {
                    this.state.choice_list.map(
                      choice=>(
                        <table class="table table-hover table-dark">
                          <tbody>
                            <tr>
                              <td> 
                                <div class="text-justify">
                                    <input type="radio" name={this.state.uuid}/>
                                    <label for="male">{choice}</label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>


                        
                      )
                    )
                  }
                 
                </div>
               
            </div>
            <div class="d-flex w-100 justify-content-between">
                  <button class="btn btn-primary" onClick={this.previousQuestion}>Previous</button>
                  <button class="btn btn-success" >Save Response</button>
                  <button class="btn btn-primary" onClick={this.nextQuestion}>Next</button>
                </div>

            </div>
            

            {/* Question Nav */}
            
            <div class="container w-auto h-100 p-5 bg-dark rounded shadow-lg " onClick={this.setQuestion}>
            <h3>Navigator</h3>
            <QuestionNavBlock num_questions={this.state.count}></QuestionNavBlock>
            </div>
        
            
            </div>      
       
      

        </AppHeader>
      </App>

    )
        }
      }
