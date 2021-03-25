import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
import './PlayerSelector.scss'

class Selector extends Component {
    render() {

        //https://www.npmjs.com/package/react-dropdown

        const options = [
            'Norre', 'Nikolai', 'Kenned', 'Emil'
        ];
        
        return(
            <Dropdown className='team-dropdown' options={options} onChange={this._onSelect} placeholder="Add player" />
        )
    }
   




    /*state = {
        activeMenu: 'min',
        open: true,
        player1: '',
        player2: ''
    };
    
    toggleMenu = e => {
        this.setState({
            activeMenu: e.target.name
        });
    };
    
    toggleOpen = () => {
        this.setState( prevState => {
            return { open: !prevState.open }
        });
    };
    
    getMenuOptions = () => {
        let options = []
        switch(this.state.activeMenu){
            case 'Player1': {
                options = ['Nikolai','Emil','Kenneth','Forfatter'];
            break
        }
        case 'Player2': {
            options = ['Nikolai','Emil','Kenneth','Forfatter'];
            break
        }
    }
    return options.map( (option, i) => {
        return (
            <li key={i} onClick={this.handleSelect.bind(this, this.state.activeMenu, option)}>
            {option}
            </li>
        )
    });
};
    
    handleSelect = (menu, value) => {
        this.setState({
            [menu]: value
        });
    };
    render() {
        const { open, player1, player2, activeMenu } = this.state;
        const menuOptions = this.getMenuOptions();
        return(
            <div className="select">
            <span onClick={this.toggleOpen} >Rent Range</span>
            {open && (
            <div>
                <div>
                    <input type="text" name="player1" value={player1} onFocus={this.toggleMenu} autoFocus />
                    -
                    <input type="text" name="player2" value={player2} onFocus={this.toggleMenu} />
                </div>
                <div>
                    <ul className={activeMenu}>
                        {menuOptions}
                    </ul>
                </div>
            </div>
        )}
        </div>
    )
    }*/

}

export default Selector