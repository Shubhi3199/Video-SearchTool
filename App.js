import React from 'react';
import youtube from '../apis/youtube'; 
import SearchBar from './SearchBar';



class App extends React.Component{
    state={videos:[]};
    onTermSubmit=async term => {
        
           const response=await youtube.get('/search',{
                params:{
                    part:term
                }
            });
        this.setState({videos: response.data.items}); 
            
     };
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
              );
    }
}

export default App;