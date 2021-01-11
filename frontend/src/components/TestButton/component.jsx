import { Component } from "react";
import api from "../../utils/axios";

export default class TestButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.props = {
      key:'key',
      testName:'name',
      testURL:''
    }
  }

  getTestQuestions = ()=>{
    api.get(this.props.testURL).then(res => {
      const r = res.data[0];
      console.log(r)
    })

  }
  openTest = ()=>{
    let URL = 'test/'+ this.props.testURL
    window.location.href = URL;
  }

  render() {
      return (
        <button class="btn btn-primary m-1" key={this.props.key} onClick={this.openTest} >{this.props.testName}</button>
      );
    }
}
