import Link from "next/link";

import { ChooseProfilePicture } from "~/app/_components/ChooseProfilePicture";
import { getServerAuthSession } from "~/server/auth";
import ProfilePicture from './_components/ProfilePicture';

export default async function Home() {
  const session = await getServerAuthSession();

  // would work if we had save flow finished
  // const latestGiphyProfilePicture = await api.profilePicture.getGiphyProfilePictureURL()
     const latestGiphyProfilePicture = '';


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Take Home <span className="text-[hsl(343,94%,50%)]">Adim</span> Project
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            Hello!
          </p>

          <div className="flex flex-col items-cente· justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session &&
                <>
                  <span>Logged in as {session.user?.name}</span>
                  <ProfilePicture githubSession={session} giphyURL={latestGiphyProfilePicture}/>
                </>
              }

            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 text-center"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main >
  );
}


async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  return (
    <ChooseProfilePicture />
  );
}
