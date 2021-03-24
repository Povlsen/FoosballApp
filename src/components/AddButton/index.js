import React from 'react'
import './AddButton.scss'
import plus from '../../assets/plus.svg'
import { Component } from 'react/cjs/react.development'
import Modal from '../Modal'

class AddButton extends Component{
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    render(){
        return (
            <div>
                <div class="add-button">
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        
                    </Modal>
                    <button onClick={this.showModal}>
                        <img src={plus} />
                    </button>
                </div>
            </div>
        )
    }
}

export default AddButton