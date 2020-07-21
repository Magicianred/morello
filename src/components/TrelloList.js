import React, { Component } from 'react'
import TrelloCard from './TrelloCard'

const TrelloList = ({ title, cards }) => {
    return (
        <div style={styles.container} >
            <h4>{title}</h4>
            {
                cards.map(card => {
                    return (
                        <TrelloCard key={card.id} skill={card.skill} />
                    )
                })
            }

        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#eee',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default TrelloList;
