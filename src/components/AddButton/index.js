import React from 'react'
import './AddButton.scss'
import plus from '../../assets/plus.svg'

const AddButton = props => ( 
    <div class="add-button">
        <button>
            <img src={plus} />
        </button>
    </div>
)

export default AddButton