import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ skill }) => {
    return (
        <Card>
            <Typography gutterBottom >
                <span>Skill:{skill}</span>
            </Typography>
        </Card>
    )
}
export default TrelloCard;