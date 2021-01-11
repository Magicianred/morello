import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext>
        <div style={styles.appContainer}>
          <h3 style={styles.header}>Morello</h3>
          <div style={styles.listContainer}>
            {lists.map((list) => {
              return (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              );
            })}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  appContainer: {
    backGroundColor: "#3C9EDE",
  },
  header: {
    textAlign: "center",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
