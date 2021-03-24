import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getScoreBoard } from '../actions/Scoreboard'
import TableView from '../components/TableView'
import TopView from '../components/TopView'
import '../styling/App.scss'

const App = ({ leaderboard, getScoreBoard }) => {
    useEffect(_ => {
        getScoreBoard()
    }, [])

    return (
        <>
            <TopView 
                headline='Leaderboard'
                users={leaderboard}
            />
            <TableView />
        </>
    )
}

const mapStateToProps = ({ scoreboard }) => ({
    leaderboard: scoreboard.board
})

export default connect(mapStateToProps, {
    getScoreBoard
})(App)