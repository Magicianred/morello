import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div style={styles.appContainer} >
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
          <TrelloActionButton list />

        </div>

      </div>
    );
  }
}

const styles = {
  appContainer: {
    backGroundColor: "#3C9EDE"
  },
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