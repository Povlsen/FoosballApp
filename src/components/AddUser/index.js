import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import './AddUser.scss'

const AddUser = () => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
        
    return( 
        <>
            <button onClick={_ => setShowAddTeamModal(true)}>Add user</button>
        
            <ReactModal 
                className={'Overlay'} 
                isOpen={showAddTeamModal} 
                onRequestClose={_ => setShowAddTeamModal(false)}
            >
                <div class='modal-view' >
                    <div class='close-btn' onClick={_ => setShowAddTeamModal(false)}>Close</div>
                    <p>Add User</p>
                    <form class='user-form'>
                        <p class='lable'>Firstname:</p>
                        <input type='text' class='input'></input>
                        <p class='lable'>Lastname:</p>
                        <input type='text' class='input'></input>
                        <p class='lable'>Displayname:</p>
                        <input type='text' class='input'></input>
                        <p class='lable'>Image:</p>
                        <input type='file' class='input'></input>
                        <button class='form-submit'>Add user:</button>
                    </form>
                </div>
            </ReactModal>
        </>
    )
}

export default AddUser