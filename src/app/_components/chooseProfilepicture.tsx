"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { type IGif } from '@giphy/js-types';
import { api } from "~/trpc/react";
import GiphySearchGrid from './GiphySearchGrid';



export function ChooseProfilePicture() {
  const router = useRouter();
  const [gif, setGif] = useState<IGif | null>(null)
  const [searchForGIF, setSearchForGIF] = useState(false);

  //memoize so we don't create a new reference on rerenders to pass to our child giphy grid which would cause it to rerender and give a jarring UX.
  const handleSetGif = useCallback((gif: IGif) => {
    setGif(gif)
  }, [])

  const createGiphyURL = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setGif(null)
    },
  });


  return (
    <div className='w-full justify-center text-center'>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20 mb-5"

        onClick={() => setSearchForGIF(!searchForGIF)}
      >
        {searchForGIF ? "Close GIF Search" : "Choose a GIF for your Profile Picture!"}
      </button>
      {searchForGIF && (
        <>
          <GiphySearchGrid handleSetGif={handleSetGif}/>
        </>
      )}
    </div>
  )
}