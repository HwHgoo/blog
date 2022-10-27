import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogCover from './blog/cover';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Grid container
      sx={{
        marginBottom: 8,
        alignContent: 'space-around',
        maxWidth: 1000,
      }}
      spacing={{ lg: 12, md: 4 }}
      columns={{ lg: 12, md: 8, sm: 4, xs: 4 }}
      margin={{ lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' }}
      // marginLeft={{ xs: 5 }}
      // marginRight={{ xs: 5 }}
      paddingBottom={{ xs: 12 }}
    >
      <Grid item lg={6} md={4} sm={4} xs={4}>
        <BlogCover
        ></BlogCover>
      </Grid>

      <Grid item lg={6} md={4} sm={4} xs={4}>
        <BlogCover
        ></BlogCover>
      </Grid>

      <Grid item lg={6} md={4} sm={4} xs={4}>
        <BlogCover
        ></BlogCover>
      </Grid>
    </Grid>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
