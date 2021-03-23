import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/App.scss'
import TopView from '../components/TopView'

const leaderboard = [
    {
        "displayName" : "Emil",
        "wins" : 17,
        "percentage" : 64
    },
    {
        "displayName" : "Ulrik",
        "wins" : 19,
        "percentage" : 65
    },
    {
        "displayName" : "Kenned",
        "wins" : 15,
        "percentage" : 66
    }
]

const App = _ => (
    <TopView 
        headline='Leaderboard'
        users={leaderboard}
    />
)

export default App