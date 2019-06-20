import React  from 'react';
import axios from 'axios';
import PeopleList from './PeopleList';
import Loader from './Loader';

class App extends React.Component{
    state = {data:[],loading:true}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            this.setState({data:response.data, loading:false})
        }
        )
        .catch(error => console.log(error))
        
    }
    
    
    render(){
        if(this.state.loading){
            return (
                <Loader />
            );

        }
        return (
            <div className="ui container">
                <PeopleList people={this.state.data}/>

            </div>
        );

    }
}

export default App;