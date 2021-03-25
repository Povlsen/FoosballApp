import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

import { getPlayers } from '../../actions/Players'
import { addNewMatch } from '../../actions/Matches'

import TeamSelect from './TeamSelect'
import TeamStats from './TeamStats'
import './AddMatch.scss'

import Player1 from '../../assets/Forfatter.png'
import Player2 from '../../assets/emil.jpg'
import Player3 from '../../assets/Kenneth.png'
import Player4 from '../../assets/Nikolai.png'


const AddMatch = ({ handleClose, show, getPlayers, addNewMatch }) => {
    const [teamOne, setTeamOne] = useState([{ playerId: 1 }, { playerId: 2 }])
    const [teamTwo, setTeamTwo] = useState([{ playerId: 3 }, { playerId: 4 }])
    const [teamOnePoints, setTeamOnePoints] = useState(0)
    const [teamTwoPoints, setTeamTwoPoints] = useState(0)

    useEffect(_ => {
        getPlayers()
    }, [getPlayers])

    useEffect(_ => {
        const getSum = list => list.reduce((val, item) => val + (isNaN(item.goalsFrom) ? 0 : item.goalsFrom), 0)
        setTeamOnePoints(getSum(teamOne))
        setTeamTwoPoints(getSum(teamTwo))
    }, [teamOne, teamTwo])

    const updateTeamMenbers = (ids, currentTeam, setTeam) => {
        let team = [
            ...currentTeam.filter(x => ids.includes(x.playerId)), // Previous players
            ...ids.reduce((a, x) => (
                    !currentTeam.some(c => c.playerId === x) && 
                    a.push({ playerId: x }), a
                ), []) // New players
        ]
        setTeam(team)
    }

    const addMatch = _ => {
        addNewMatch({
            winnerStats: teamOnePoints > teamTwoPoints ? teamOne : teamTwo,
            looserStats: teamOnePoints < teamTwoPoints ? teamOne : teamTwo
        }).then(_ => {
            handleClose()
            console.log('yes!')
        })
    }

    return (
        <ReactModal
            isOpen={show} 
            onRequestClose={handleClose} 
            className={'greyOverlay'}
            contentElement={(props, children) => <div {...props} onClick={handleClose}>{children}</div>}
            >
            <div class='content' onClick={e => e.stopPropagation()}>
                <h3 id='title'>New Match</h3>
                <div class='pointGrid'>
                    <div>
                        <div><p>{teamOnePoints}</p></div>
                    </div>
                    <div>
                        <div><p>{teamTwoPoints}</p></div>
                    </div>
                </div>
                <div class='selectTeamGrid'>
                    <TeamSelect 
                        memberIds={teamOne.map(x => x.playerId)} 
                        onChange={data => updateTeamMenbers(data, teamOne, setTeamOne)} 
                    />
                    <h4>Vs.</h4>
                    <TeamSelect 
                        memberIds={teamTwo.map(x => x.playerId)} 
                        onChange={data => updateTeamMenbers(data, teamTwo, setTeamTwo)} 
                    />
                </div>
                <div class='teamsGrid'>
                    <TeamStats 
                        imgLeft 
                        teamStats={teamOne} 
                        onChange={setTeamOne} 
                    />
                    <TeamStats 
                        imgRight
                        teamStats={teamTwo}
                        onChange={setTeamTwo}
                    />                    
                </div>
                <div class='buttonHolder'>
                    <button onClick={addMatch}>Add</button>
                </div>
            </div>
        </ReactModal>
    )
}

const mapStateToProps = ({ players }) => ({
    players: players.list
})

export default connect(mapStateToProps, {
    getPlayers,
    addNewMatch
})(AddMatch)
