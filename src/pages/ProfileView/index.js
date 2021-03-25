
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlayerScoreDetails } from '../../actions/Players'
import TableView from './TableView'
import TopView from './TopView'

const ProfileView = ({ getPlayerScoreDetails }) => {
    const [scoreDetails, setScoreDetails] = useState({})
    let { playerId } = useParams()

    useEffect(_ => {
        getPlayerScoreDetails(playerId).then(res => setScoreDetails(res.data))
    }, [getPlayerScoreDetails, playerId])

    return (
        <>
            <TopView 
                scoreDetails={scoreDetails}             
            />
            <TableView
                aggregatedMatchs={scoreDetails.aggregatedMatchScores}
                playersProfilePictures={scoreDetails.playersProfilePictures}
            />
        </>
    )
}

export default connect(null, {
    getPlayerScoreDetails
})(ProfileView)