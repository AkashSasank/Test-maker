import React from 'react';

import { App, AppHeader} from './style';
import api from '../../utils/axios';
import TestButton from '../../components/TestButton';

export default class Catalogue extends React.Component {
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
  }

  render(){
    return (
      <App>
        <AppHeader>
        <div class="d-flex justify-content-around w-100">
          {
            this.state.question_categories.map(
              category=>(
               <div class="container w-auto p-5 bg-dark rounded shadow-lg " key={'container'+category}>
                 <h3>{category}</h3>
                 <div class="d-flex  flex-wrap justify-content-around w-100 p-5" key={'test-links-container'+category} >
                {this.state.question_sets[category]['uuid'].map(
                  (question_urls, index)=>(
                    <TestButton key={'test-link'+ index} testName={'Test' + (index + 1)} testURL={question_urls}> </TestButton>
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