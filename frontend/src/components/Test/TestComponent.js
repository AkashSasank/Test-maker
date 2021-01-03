import React from 'react';


class TestComponent extends React.Component{
    state={
        testsList:[],
        error:false
    }

    componentDidMount(){
        this.getTestList();
    }

    getTestList = async () => {
        try {
            const response = await fetch("https://test-taking-app.herokuapp.com/api/v1/tests/");
            console.log(response)
            if (response.ok) { // ckeck if status code is 200
                const data = await response.json();
                this.setState({ testsList: data.results});
                console.log(this.state.testsList)
            } else { this.setState({ error: true }) }
        } catch (e) { //code will jump here if there is a network problem
    this.setState({ error: true });
   }
}
    render(){
        return(
            <React.Fragment>
                <div class="test-container">
                    <div class="container h-100">
                        
                    </div>
                </div>
            </React.Fragment>
            )
    }

}
export default  TestComponent;