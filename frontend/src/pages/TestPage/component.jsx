import React from 'react';
import { App, AppHeader} from './style';
import api from '../../utils/axios';

export default class TestPage extends React.Component {
  state = {
    questions : []
  }

  componentDidMount(){
    let testID = this.props.match.params['testId']
    api.get(`tests/`+testID+'/')
    .then(res => {
      const r = res.data[0];
      this.setState({questions: r.question_list})
      console.log(this.state)
    })
  }

 
  render(){
    return (
      <App>
        <AppHeader>         
          <div class='container'>
          {
            this.state.questions.map(question=>(
              <div class="card text-white bg-secondary mb-3 w-100">
                <div class="card-header "><h3>{question.question_text}</h3></div>
                <div class="card-body left">
                  {
                    question.choice_list.map(
                      choice=>(
                        <table class="table table-hover table-dark">
                          <tbody>
                            <tr>
                              <td> 
                                <div class="text-justify">
                                    <input type="radio" name={question.uuid}/>
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

            ))
          
          }
          </div>
          
       
      

        </AppHeader>
      </App>

    )
        }
      }
