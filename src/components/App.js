import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends Component{

    onSearchSubmitHandler(term){

       axios.get('https://api.unsplash.com/search/photos',{
           params:{ query: term },
           headers:{
               Authorization:'Client-ID 8fba2aa478d218d2f147b5c23e8325b693a6952c4f31b069877088449d2ec4dd'
        
           }
       }).then((res)=>{
            console.log(res.data.results);
       });
      
       
    }

    render(){

    return( 
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmitHandler}/>
    </div>
    );

    }

}

export default App;