import React from 'react';

import logo from './logo.svg';
import { App, AppLogo, AppHeader, AppLink} from './style';
import Sample from '../../components/Sample';
import api from '../../utils/axios';

export default class Home extends React.Component {
  state = {
    question_sets:[],
    question_categories:[]
  }
  
  componentDidMount() {
    api.get(`tests/`)
      .then(res => {
        const r = res.data[0];
        this.setState({question_sets: r})     
        this.setState({question_categories: Object.keys(r)})  
      })
  }l̥

  render(){
    return (
      <App>
        <AppHeader>
        <div class="d-flex justify-content-around w-100">
          {
            this.state.question_categories.map(
              category=>(
               <div class="container w-auto p-5 bg-dark rounded shadow-lg ">
                 <h3>{category}</h3>

                 <div class="d-flex justify-content-around w-100">
                {this.state.question_sets[category].map(
                  (question, index)=>(
                    <span class="badge badge-secondary">Test {index + 1}</span>
                    
                  )
                )}
                </div>
                </div>
              )
            )
          }
         </div>
  
        </AppHeader>
      </App>
    )
  }

}