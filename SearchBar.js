import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    onInputChange=(event)=>{
        this.setState({term: event.target.value});
   
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}><br />
                    <label><b><i><h3>Video search</h3></i></b></label><br /><br />
                    <div className="ui icon input loading">
                   
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    
                    <i class="search icon"></i>
                    
                    </div><br />
                    
                </form>
            </div>  
        );
    }
}
export default SearchBar;