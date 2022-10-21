import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import './cell.css'

interface CellState {
    raised: boolean
    shadow: number
    hovered?: boolean
}

interface CellStyle {
    root: string
    hovered: string
}

const useStyle = makeStyles({
    root: {
        margin: 'auto',
        maxWidth: 600,
        transition: 'transform 0.15s ease-in-out',
        marginTop: '30px'
    },
    hovered: {
        margin: 'auto',
        maxWidth: 600,
        transition: 'scale3d(1.05, 1.05, 1)',
        marginTop: '30px'
    }
});


function BlogCell(props: any) {
    const classes = useStyle();
    const [state, setState] = useState<CellState>({ raised: false, shadow: 1 });
    useEffect(() => {
        console.log('raised changed: ', state.raised);
        const timer = state.raised ? setTimeout(() => {
            setState({
                raised: state.raised,
                shadow: state.shadow,
                hovered: true
            })
        }, 300) : null;
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [state.raised])


    const onMouseOver = () => {
        console.log("mouse over")
        setState({
            raised: true,
            shadow: 3
        });
    };

    const onMouseOut = () => {
        console.log("mouse out")
        setState({
            raised: false,
            shadow: 1,
            hovered: false
        });
    };

    return (
        <Card
            className={classes.root}
            sx={{ display: "grid" }}
            classes={{ root: state.hovered ? classes.hovered : "" }}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            raised={state?.hovered}
        >
            <CardContent className="blogCellContent">
                <Typography color="text.primary" >
                    Title
                </Typography>
                <Typography color="text.secondary">
                    sadfsa sdf asdf asd asdfasdf sadfasdf
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                    asdfas adf wqo lkl sadf dvno sadof q
                </Typography>
            </CardContent>
        </Card>
    )
}
export default BlogCell;