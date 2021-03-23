import './modal.scss'

const Modal = ({handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="greyOverlay" className={showHideClassName}>
            <div id="background">
                <div id="title">New Match</div>
                <Grid className="pointGrid">
                    <Grid item>
                        <Paper id="teamOnePoints">0</Paper>
                    </Grid>
                    <Grid item>
                        <Paper id="teamTwoPoints">0</Paper>
                    </Grid>
                </Grid>

                <Grid className="playerGrid">

                </Grid>
                <button className="button">Add</button>
            </div>
        </div>
    );
}