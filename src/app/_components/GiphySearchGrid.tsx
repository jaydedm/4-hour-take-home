"use client"

import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components';
import { type IGif } from '@giphy/js-types';
import React from 'react';

import { useContext } from "react";

interface GiphySearchGridProps {
  handleSetGif: (gif: IGif) => void
}

function GiphySearchGrid({handleSetGif}: GiphySearchGridProps) {

  const Components = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
      <>
        <SearchBar />
        <SuggestionBar />
        {/**
                key will recreate the component,
                this is important for when you change fetchGifs
                e.g. changing from search term dogs to cats or type gifs to stickers
                you want to restart the gifs from the beginning and changing a component's key does that
            **/}
        <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} noLink onGifClick={handleSetGif} />
      </>
    )
  }

  return (
    <SearchContextManager apiKey={'cJhEPSHWdB78mHfTM5NqwICS1JfvQgrz'}>
      <Components />
    </SearchContextManager>
  )
}

//memoize so that we don't rerender the giphy grid every time we select and set one to save as our profile picture
export default React.memo(GiphySearchGrid)