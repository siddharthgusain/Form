import React,{Component} from 'react';
import unsplash from  '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component{


    constructor(props){
      super(props);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos)=>console.log(pos)
        );
      } 
    }
    state={
        images:[]
        
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
        <ImageList images={this.state.images} />
    </div>
    );

    }

}

export default App;