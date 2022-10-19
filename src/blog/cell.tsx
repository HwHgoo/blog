import { autocompleteClasses, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import './cell.css'

interface CellState {
    raised: boolean
    shadow: number
}

interface CellStyle {
    root: string
    hovered: string
}

const useStyle = makeStyles({
    root: {
        margin: 'auto',
        maxWidth: 310,
        transition: 'transform 0.15s ease-in-out'
    },
    hovered: {
        margin: 'auto',
        maxWidth: 310,
        maxHeight: 500,
        transition: 'scale3d(1.05, 1.05, 1)'
    }
});


function BlogCell(props: any) {
    const classes = useStyle();
    console.log('classes: ', classes)
    const [state, setState] = useState<CellState>({ raised: false, shadow: 1 });

    const onMouseOver = () => {
        console.log("mouse over")
        setState({
            raised: true,
            shadow: 3
        })
    };

    const onMouseOut = () => {
        console.log("mouse out")
        setState({
            raised: false,
            shadow: 1
        })
    };

    return (
        <Card
            className={classes.root} 
            sx={{ display: "grid" }}
            classes={{ root: state.raised ? classes.hovered : "" }}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            raised={state.raised}
        >
            <CardContent className="blogCellContent">
                <Typography color="text.primary" >
                    Title
                </Typography>
                <Typography color="text.secondary">
                    sadfsa sdf asdf asd asdfasdf sadfasdf
                    asdfas adf wqo lkl sadf dvno sadof q
                </Typography>
            </CardContent>
        </Card>
    )
}
export default BlogCell;