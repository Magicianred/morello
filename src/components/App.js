import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App" >
        <h3 style={styles.header} >Morello</h3>
        <div style={styles.listContainer}>
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

      </div>
    );
  }
}

const styles = {
  header: {
    textAlign: "center"
  },
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
}


const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);