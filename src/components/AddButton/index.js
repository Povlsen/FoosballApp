import React, { useState } from 'react'
import plus from '../../assets/plus.svg'

import AddTeam from '../AddTeam'
import './AddButton.scss'

const AddButton = _ => {
    const [showAddTeamModal, setShowAddTeamModal] = useState(false)
    
    return (
        <div>
            <div class="add-button">
                <AddTeam show={showAddTeamModal} handleClose={_ => setShowAddTeamModal(false)} />
                <button onClick={_ => setShowAddTeamModal(true)}>
                    <img src={plus} />
                </button>
            </div>
        </div>
    )
}
export default AddButton