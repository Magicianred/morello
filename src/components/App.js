import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App" >
        <p>Miami</p>
        {
          lists.map(list => {
            return (
              < TrelloList
                key={list.id}
                title={list.title}
                cards={list.cards}
              />)
          })
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);