import React, { Component } from 'react';
import './modal.scss'
import Player1 from '../../assets/Forfatter.png'
import Player2 from '../../assets/emil.jpg'
import Player3 from '../../assets/Kenneth.png'
import Player4 from '../../assets/Nikolai.png'

var teamOnePoints = 0;
var teamTwoPoints = 0;

const Modal = ({handleClose, show, children }) => {
    if (show != true)
        return null
    return (
        <div class='greyOverlay' onClick={handleClose}>
            <div id='background'>
                <h3 id='title'>New Match</h3>
                <div class='pointGrid'>
                    <div>
                        <div id='teamOnePoints'><p>{teamOnePoints}</p></div>
                    </div>
                    <div>
                        <div id='teamTwoPoints'><p>{teamTwoPoints}</p></div>
                    </div>
                </div>
                <div class="selectTeamGrid">
                    <div>
                        <img src={Player1}></img>
                        <img src={Player2}></img>
                        <button>Manage team &gt;</button>
                    </div>
                    <h4>Vs.</h4>
                    <div>
                        <img src={Player3}></img>
                        <img src={Player4}></img>
                        <button>Manage team &gt;</button>
                    </div>
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
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
};

function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
        t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
}
document.body.addEventListener('input', enforce_maxlength);

function updateTotalScore(){
    teamOnePoints = getNumberVal('player1GF') + getNumberVal('player2GF');
    document.getElementById('teamOnePoints').innerHTML = teamOnePoints;
    teamTwoPoints = getNumberVal('player3GF') + getNumberVal('player4GF')
    document.getElementById('teamTwoPoints').innerHTML = teamTwoPoints;
}
document.body.addEventListener('input', updateTotalScore);

function getNumberVal(elementId){
    return parseInt(document.getElementById(elementId).value, 10) || 0;
}

function sendMatch(){

}

export default Modal