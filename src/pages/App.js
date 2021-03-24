import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getScoreBoard } from '../actions/Scoreboard'

import TopView from '../components/TopView'
import '../styling/App.scss'

/*const leaderboard = [
    {
        "displayName" : "Emil",
        "wins" : 17,
        "percentage" : 64,
        "losses" : 54,
        "total" : 78
    },
    {
        "displayName" : "Ulrik",
        "wins" : 19,
        "percentage" : 65,
        "losses" : 54,
        "total" : 78
    },
    {
        "displayName" : "Kenned",
        "wins" : 15,
        "percentage" : 66,
        "losses" : 54,
        "total" : 78
    }
]*/

const App = ({ leaderboard, getScoreBoard }) => {
    useEffect(_ => {
        getScoreBoard()
    }, [])

    return (
        <TopView 
            headline='Leaderboard'
            users={leaderboard}
        />
    )
}

const mapStateToProps = ({ scoreboard }) => ({
    leaderboard: scoreboard.board
})

export default connect(mapStateToProps, {
    getScoreBoard
})(App)