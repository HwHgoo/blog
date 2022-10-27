import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './cover.css'

interface CoverState {
    raised: boolean
    shadow: number
    hovered?: boolean
}

interface CoverProp {
    image: string
    title: string
    overview: string
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


function BlogCover(props: CoverProp) {
    const classes = useStyle();
    const [state, setState] = useState<CoverState>({ raised: false, shadow: 1 });
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
        setState({
            raised: true,
            shadow: 3
        });
    };

    const onMouseOut = () => {
        console.log('move out')
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
            onClick={() => { console.log('on click') }}
        >
            <CardContent className="blogCellContent">
                <CardMedia
                    component='img'
                    // height='400'
                    image="https://pic1.zhimg.com/v2-07c8ca78fd60aea1d682330839e355ab_720w.jpg?source=172ae18b"
                />
                <ReactMarkdown>
                    #### Title
                </ReactMarkdown>
                <ReactMarkdown>
                    ##### Overview
                </ReactMarkdown>
            </CardContent>
        </Card>
    )
}
export default {BlogCover};