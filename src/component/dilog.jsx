import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";

const OpenDilog = ({open, todoDetails, handleClose})=> {
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Todo Details</DialogTitle>
            <DialogContent>
                {todoDetails ? (
                    <div>
                        <Typography variant="body1" color="text.primary">
                            <strong>Task:</strong> {todoDetails.todo}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>Completed:</strong> {todoDetails.completed ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>User ID:</strong> {todoDetails.userId}
                        </Typography>
                    </div>
                ) : (
                    <div>Loading details...</div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default OpenDilog;