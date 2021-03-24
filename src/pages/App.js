import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/App.scss'
import TopView from '../components/TopView'
import TableView from '../components/TableView'

const leaderboard = [
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
]

const App = _ => (
    <>
        <TopView 
            headline='Leaderboard'
            users={leaderboard}
        />
        <TableView 
            users={leaderboard}
        />
    </>
)

export default App