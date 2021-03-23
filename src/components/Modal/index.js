import React, { Component } from 'react';
import './modal.scss'
import Forfatter from '../../assets/Forfatter.png'
import Emil from '../../assets/emil.jpg'

var teamOnePoints = 0;
var teamTwoPoints = 0;

//const Modal = ({handleClose, show, children }) => {
//const showHideClassName = show ? 'modal display-block' : 'modal display-none';
class Modal extends Component {
    render(){
        return (
            <div id='greyOverlay' className='modal display-block'>
                <div id='background'>
                    <h3 id='title'>New Match</h3>
                    <div className='pointGrid'>
                        <div>
                            <div id='teamOnePoints'><p>{teamOnePoints}</p></div>
                        </div>
                        <div>
                            <div id='teamTwoPoints'><p>{teamTwoPoints}</p></div>
                        </div>
                    </div>

                    <div className="selectTeamGrid">
                        <div>
                            <img src={Emil}></img>
                            <img src={Emil}></img>
                            <button>Manage team &gt;</button>
                        </div>
                        <h4>Vs.</h4>
                        <div>
                            <img src={Emil}></img>
                            <img src={Emil}></img>
                            <button>Manage team &gt;</button>
                        </div>
                    </div>

                    <div id='teamsHolder' className='teamsGrid'>
                        <div id='teamOne' className='playerGrid'>
                            <span width='50px'></span>
                            <h4>GF</h4>
                            <h4>GA</h4>

                            <img src={Forfatter}></img>
                            <div><input id='player1GF' type='number' maxlength='2' placeholder='0'/></div>
                            <div><input id='player1GA' type='number' maxlength='2' placeholder='0'/></div>

                            <img src={Forfatter}></img>
                            <div><input id='player2GF' type='number' maxlength='2' placeholder='0'/></div>
                            <div><input id='player2GA' type='number' maxlength='2' placeholder='0'/></div>

                        </div>
                        <div id='teamTwo'className='playerGrid'>
                            <h4>GF</h4>
                            <h4>GA</h4>
                            <span width='50px'></span>

                            <div><input id='player3GF' type='number' maxlength='2' placeholder='0'/></div>
                            <div><input id='player3GA' type='number' maxlength='2' placeholder='0'/></div>
                            <img src={Forfatter}></img>

                            <div><input id='player4GF' type='number' maxlength='2' placeholder='0'/></div>
                            <div><input id='player4GA' type='number' maxlength='2' placeholder='0'/></div>
                            <img src={Forfatter}></img>
                        </div>
                    </div>

                    <button className='button'>Add</button>
                </div>
            </div>
        );
    }
}
function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
        t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
}
document.body.addEventListener('input', enforce_maxlength);

function updateTotalScore(){
    teamOnePoints = parseInt(document.getElementById('player1GF').value, 10) || 0 + parseInt(document.getElementById('player2GF').value, 10) || 0;
    document.getElementById('teamOnePoints').innerHTML = teamOnePoints;
    teamTwoPoints = parseInt(document.getElementById('player3GF').value, 10) || 0 + parseInt(document.getElementById('player4GF').value, 10) || 0;
    document.getElementById('teamTwoPoints').innerHTML = teamTwoPoints;
}
document.body.addEventListener('input', updateTotalScore);

export default Modal;