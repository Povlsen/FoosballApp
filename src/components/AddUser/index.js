import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

const AddUser = () => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
        
    return( 
        <>
        {console.log(showAddTeamModal)}
            <button onClick={_ => setShowAddTeamModal(true)}>Manage Team</button>
        
            <ReactModal className={'Overlay'} isOpen={showAddTeamModal} onRequestClose={_ => setShowAddTeamModal(false)}
            >
                <div class='modal-view' >
                    <p>Add User</p>
                </div>
            </ReactModal>
        </>
    )
}

export default AddUser