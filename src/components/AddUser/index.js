import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import ReactModal from 'react-modal'

import { postPlayer, getPlayers } from '../../actions/Players'
import './AddUser.scss'

const AddUser = ({ postPlayer, getPlayers }) => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {        
        postPlayer({
            ...data,
            profilePicture: selectedFile
        }).then(_ => {
            getPlayers()
            setShowAddTeamModal(false)
        })
    }

    const onImage = async e => {
        const toBase64 = async file => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })

        let file = e.target.files[0]
        if (file.type.startsWith('image/'))
            setSelectedFile(await toBase64(file))
    }

    return (
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
                        <input name='profilePicture' type='file' class='input' onChange={onImage}></input>
                        <button class='form-submit'>Add user</button>
                    </form>
                </div>
            </ReactModal>
        </>
    )
}




export default connect(null, {
    postPlayer,
    getPlayers
})(AddUser)
