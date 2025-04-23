// import {Card} from "@mui/material";
import { Card, CardContent, Typography, Checkbox, Button } from '@mui/material';
import {Fragment, useState} from "react";
import OpenDilog from "./dilog.jsx";


const TodoItem = ({todo, handlegetToDoListItem})=>{
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState({});

    const showToDoDetails = async(id)=>{
        const data = await handlegetToDoListItem(id)
        console.log("Handle TodoList",data, id)
        if(data){
            console.log("Inside Dilog",data)
            setDetails(data)
            setOpen(true)
        }
    }
    const handleClose = () => {
        console.log("Close Dilog", open)
        setOpen(false);
    }

    return (
        <Fragment>
        <Card sx={{ maxWidth: 345, margin: "10px", backgroundColor: "#f5f5f5" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {todo.todo} {/* The task description */}
                </Typography>
                {/* Button to toggle completion status (for demonstration) */}
                <Button
                    variant="contained" sx={{ marginTop: "10px" }}
                    onClick={()=>showToDoDetails(todo.id)}>
                    Details

                </Button>
            </CardContent>
        </Card>

            <OpenDilog open={open} todoDetails={details} handleClose={handleClose} />

        </Fragment>

    );
}

export default TodoItem