import React from 'react'
import './TableView.scss'

const TableView = props => (
    <div class='table-view'>
        <tabel class='table'>
            <tr class='table-heading'>
                <th>Player</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Total</th>
                <th>Win-rate</th>
            </tr>
            <tr class='table-data'>
                <td>{props.users[0].displayName}</td>
                <td>{props.users[0].wins}</td>
                <td>{props.users[0].losses}</td>
                <td>{props.users[0].total}</td>
                <td>{props.users[0].percentage}</td>
            </tr>
        </tabel>
    </div>
)

export default TableView