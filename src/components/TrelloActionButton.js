import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };
  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  renderActionButton = () => {
    const { list } = this.props;
    const buttonText = list ? "New List" : "New card";
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";

    return (
      <div
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <p onClick={this.openForm}>
          <Icon
            style={{
              color: "#931919",
            }}
          >
            add
          </Icon>
          <div>{buttonText}</div>
        </p>
      </div>
    );
  };
  renderForm() {
    const { list } = this.props;
    const placeHolder = list ? "Enter List Title" : "Enter card Title";
    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            overflow: "hidden",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <Textarea
            style={styles.textAreaStyle}
            placeholder={placeHolder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#5aac44",
            }}
          >
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer",
            }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  }
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderActionButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: 5,
    height: 44,
    width: "inherit",
    // paddinLeft: 20,
    // paddinBottom: 30,
  },
  openButton: {
    cursor: "pointer",
  },
  textAreaStyle: {
    resize: "none",
    width: "inherit",
    outline: "none",
    border: "none",
    width: "100%",
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default TrelloActionButton;
