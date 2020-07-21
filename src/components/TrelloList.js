import React, { Component } from 'react'

const TrelloList = ({ title }) => {
    return (
        <div style={StyleSheet.container} >
            Trello List
            <h4>{title}</h4>
        </div>
    )
}

export default TrelloList;
