import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getScoreBoard } from '../../actions/Scoreboard'
import AddButton from '../../components/AddButton'
import TableView from './TableView'
import TopView from './TopView'
import './ScoreBoard.scss'

const ScoreBoard = ({ leaderboard, getScoreBoard }) => {
    useEffect(_ => {
        getScoreBoard()
    }, [getScoreBoard])

    return (
        <>
            <TopView 
                headline='Leadboard'
                players={leaderboard}
            />
            <TableView
                players={leaderboard}
            />
            <AddButton />
        </>
    )
}

const mapStateToProps = ({ scoreboard }) => ({
    leaderboard: scoreboard.board
})

export default connect(mapStateToProps, {
    getScoreBoard
})(ScoreBoard)