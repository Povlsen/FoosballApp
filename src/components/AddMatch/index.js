import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { getPlayers } from '../../actions/Players'
import './AddMatch.scss'
import Player1 from '../../assets/Forfatter.png'
import Player2 from '../../assets/emil.jpg'
import Player3 from '../../assets/Kenneth.png'
import Player4 from '../../assets/Nikolai.png'

import Team from './Team';
import TeamSelect from './TeamSelect'

const AddTeam = ({ handleClose, show, getPlayers }) => {
    const [teamOne, setTeamOne] = useState([{},{},{},{}])
    const [teamTwo, setTeamTwo] = useState([{},{}])
    const [teamOnePoints, setTeamOnePoints] = useState(0)
    const [teamTwoPoints, setTeamTwoPoints] = useState(0)

    useEffect(_ => {
        getPlayers()
    }, [getPlayers])

const AddMatch = ({handleClose, show, children }) => {
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
        console.log('updateTeamMenbers', team)
        setTeam(team)
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
                <div id='teamsHolder' class='teamsGrid'>
                    <div id='teamOne' class='playerGrid'>
                        <span width='50px'></span>
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <img src={Player1}></img>
                        <div><input id='player1GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player1GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player2}></img>
                        <div><input id='player2GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player2GA' type='number' maxlength='2' placeholder='0'/></div>
                    </div>
                    <div id='teamTwo'class='playerGrid'>
                        <h4>GF</h4>
                        <h4>GA</h4>
                        <span width='50px'></span>
                        <div><input id='player3GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player3GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player3}></img>
                        <div><input id='player4GF' type='number' maxlength='2' placeholder='0'/></div>
                        <div><input id='player4GA' type='number' maxlength='2' placeholder='0'/></div>
                        <img src={Player4}></img>
                    </div>
                </div>
                <div class='buttonHolder'>
                    <button onClick={_ => {}}>Add</button>
                </div>
            </div>
        </ReactModal>
}

const mapStateToProps = ({ players }) => ({
    players: players.list
})

export default connect(mapStateToProps, {
    getPlayers
})(AddMatch)
