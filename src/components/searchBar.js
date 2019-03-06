import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: '' };

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div class="ui form">
              <div class="field">
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Enter something to search for e.g. Manhattan, then press enter to search"
                    value={this.state.searchTerm}
                    onChange={(e) => this.setState({ searchTerm: e.target.value })}
                    />
                </form>
              </div>
            </div>
        );
    }
}

export default SearchBar;
