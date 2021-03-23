import React, { Component } from 'react';
import './modal.scss'

//const Modal = ({handleClose, show, children }) => {
//const showHideClassName = show ? "modal display-block" : "modal display-none";
class Modal extends Component {
    render(){
        return (
            <div id="greyOverlay" className="modal display-block">
                <div id="background">
                    <div id="title">New Match</div>
                    <div className="pointGrid">
                        <div item>
                            <div id="teamOnePoints">0</div>
                        </div>
                        <div item>
                            <div id="teamTwoPoints">0</div>
                        </div>
                    </div>

                    <div id="teamsHolder" className="teamsGrid">
                        <div id="teamOne" className="playerGrid">
                            <span width="50px"></span>
                            <div className="playerGridTitle">GF</div>
                            <div className="playerGridTitle">GA</div>

                            <div><img></img></div>
                            <div>0</div>
                            <div>0</div>

                            <div><img></img></div>
                            <div>0</div>
                            <div>0</div>

                        </div>
                        <div id="teamTwo"className="playerGrid">
                            <div className="playerGridTitle">GF</div>
                            <div className="playerGridTitle">GA</div>
                            <span width="50px"></span>

                            <div>0</div>
                            <div>0</div>
                            <div><img></img></div>

                            <div>0</div>
                            <div>0</div>
                            <div><img></img></div>
                        </div>
                    </div>

                    <button className="button">Add</button>
                </div>
            </div>
        );
    }
}
export default Modal;