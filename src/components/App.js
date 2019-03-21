import React,{Component} from 'react';
import unsplash from  '../api/unsplash';
import SearchBar from './SearchBar';


class App extends Component{

    state={
        images:[],
        search:null
    };

    onSearchSubmitHandler = async (term) =>{

      const response = await unsplash.get('/search/photos',{
           params:{ query: term },
        });
      
      this.setState({images:response.data.results,search:term});
      
       
    }

    render(){

    return( 
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmitHandler}/>
        Found:{this.state.images.length} {this.state.search} images
    </div>
    );

    }

}

export default App;