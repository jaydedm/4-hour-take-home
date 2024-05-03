"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { api } from "~/trpc/react";
import { IGif } from '@giphy/js-types';


export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [gif, setGif] = useState<IGif | null>(null)
  const [searchForGIF, setSearchForGIF] = useState(false);

  const gf = new GiphyFetch('cJhEPSHWdB78mHfTM5NqwICS1JfvQgrz')
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
  const searchGifs = (query: string) => gf.search(query, { limit: 10 })

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
        <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} noLink onGifClick={(e) => console.log(e)}/>
      </>
    )
  }

  const SearchExperience = () => (
      <SearchContextManager apiKey={'cJhEPSHWdB78mHfTM5NqwICS1JfvQgrz'}>
        <Components />
      </SearchContextManager>
  )

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  console.log(gif)

  return (
    <div className='w-full justify-center text-center'>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"

        onClick={() => setSearchForGIF(!searchForGIF)}
      >
        {searchForGIF ? "Close GIF Search" : "Choose a GIF for your Profile Picture!"}
      </button>
      {searchForGIF && (
        <>
          <SearchExperience />
        </>
      )}
    </div>
  )

  //   return (
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         createPost.mutate({ name });
  //       }}
  //       className="flex flex-col gap-2"
  //     >
  // <input
  //   type="text"
  //   placeholder="Title"
  //   value={name}
  //   onChange={(e) => setName(e.target.value)}
  //   className="w-full rounded-full px-4 py-2 text-black"
  // />
  //       <button
  //         type="submit"
  //         className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
  //         disabled={createPost.isPending}
  //       >
  //         {createPost.isPending ? "Submitting..." : "Submit"}
  //       </button>
  //     </form>
  //   );
  // }

}