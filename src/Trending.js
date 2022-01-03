import { GiphyFetch } from '@giphy/js-fetch-api'
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Gif,
  Grid,
} from "@giphy/react-components";

import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("jXyYWndsyCU2mrBVeQOSDlmhX7BeQNO0");

const useStyles = makeStyles((theme) => ({
  square: {
    marginRight: "30px",
    marginLeft: "30px",
  },
  main: {
    backgroundColor: "black"
  },
}));

function Trending() {
  const [modalGif, setModalGif] = useState();
  const classes = useStyles();

  return (
<div
    style={{
      backgroundColor: 'black',
      width: '100%',
      height: '100vh'
      }}>
    <div className = {classes.main}>
      <div className = {classes.square}>
        <GifGrid
            onGifClick={(gif, e) => {
              console.log("gif", gif);
              e.preventDefault();
              setModalGif(gif);
            }}
          />
                {modalGif && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(0, 0, 0, .8"
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setModalGif(undefined);
                }}
              >
                <Gif gif={modalGif} width={600} />
              </div>
            )}
      </div>
  </div>
</div>

  );
}

function GifGrid({ onGifClick }) {
  const fetchGifs = (offset) =>
    giphyFetch.trending({ offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
}

export default Trending;
