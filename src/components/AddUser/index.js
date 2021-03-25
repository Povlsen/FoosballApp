import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import ReactModal from 'react-modal'

import { postPlayer } from '../../actions/Players'
import './AddUser.scss'

const AddUser = ({ postPlayer }) => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {        
        postPlayer(data).then(_ => setShowAddTeamModal(false))
    }

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
                    <form class='user-form' onSubmit={handleSubmit(onSubmit)}>
                        <p class='lable'>Firstname:</p>
                        <input name='firstName' type='text' class='input' ref={register}></input>
                        <p class='lable'>Lastname:</p>
                        <input name='lastName' type='text' class='input' ref={register}></input>
                        <p class='lable'>Displayname:</p>
                        <input name='displayName' type='text' class='input' ref={register}></input>
                        <p class='lable'>Image:</p>
                        <input name='profilePicture' type='file' class='input'></input>
                        <button class='form-submit' >Add user</button>
                    </form>
                </div>
            </ReactModal>
        </>
    )
}




export default connect(null, {
    postPlayer,
})(AddUser)
