"use client"

import { type Session } from 'next-auth'
import Image from 'next/image'

interface ProfilePictureProps {
  giphyURL: string
  githubSession: Session
}

function ProfilePicture({giphyURL, githubSession}: ProfilePictureProps) {
  return (
    <>
      {githubSession && giphyURL.length === 0 && <Image src={githubSession?.user?.image ?? ""} alt='Profile Pic' width={300} height={300}></Image>}
      {giphyURL.length !== 0 && <> <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}><iframe src={ giphyURL } width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><div><a href="https://giphy.com/gifs/percolategalactic-yoda-the-force-may-4th-l4HnUoCy5oCXwrxKg">via GIPHY</a></div> </>}
    </>
  )
}

export default ProfilePicture