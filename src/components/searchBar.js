import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onSubmit = event => {
        event.preventDefault();

        console.log(this.state.searchTerm);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    value={this.state.searchTerm}
                    onChange={(e) => this.setState({ searchTerm: e.target.value })} 
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;