import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event) {
      this.props.onSearchTextChange(event.target.value);
    }
    render() {
      return (
          <input 
            type="text" 
            placeholder="Search..." 
            value = {this.props.searchText}
            onChange={this.handleInputChange}
            className="input__search"/>
      );
    }
  }
  
export default SearchBar;
