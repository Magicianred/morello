import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'

class TrelloActionButton extends Component {
    renderActionButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add another List' : 'Add another card';
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextBackground = list ? 'rgba(0,0,0,0.15)' : 'inherit';

        return (
            <div
                style={{
                    ...styles.openForButtonGrop,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }
    render() {
        return this.renderActionButton();
    }
}

const styles = {
    openForButtonGrop: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 'inherit',
        paddinLeft: 10
    }
}


export default TrelloActionButton;