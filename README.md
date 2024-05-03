# Hello Adim Team

Here is the result of my 3.5 hours working this morning.

Thank you so much for the time you've already invested in considering me. I got awfully close to finishing everythign in the alotted time, but didn't quite finish. I wasn't too familiar with a bit of the tooling so most of my time was spent ramping up. Also, the requirements stated "User" implying authorization to tie a user to a session and be able to save profile pictures, and I did plan off of this presumption.

In a comical turn events, I have an emergency at my current job that I CANNOT push back, cutting in the last 45 minutes or so that I have in my 4 hour allotment. I started with planning, and chose to start with the most difficult problems including a few of the stretch goals first, very confident I could get it all done. I'm an honest man, so I'm pushing up what I have done, but because of the emergency I have few tasks left to complete to finish the base task. I will circle back and finish tonight, but wanted to push what I have now. It truly is the easy work left.

Here's what IS finished, which was the bulk of the work:

- OAuth integration with Github for easy login/logout experience
- integration with GIPHY api
- Basic UX/UI for login/logout and profile picture selection
- env variables created and securely stored, and specified for error prevention during build
- All BE plumbing is complete and type-secured to save profile pictures to a user account based on the GitHub userID in the session. Leveraged TRPC/prisma routers
- Deployed application on Vercel
- deployed database using supabase

Basic remainder work:

- Set the profile picture to the GIF when the user selects one (small task)
- add a save button that calls the api (function and "plumbing" already complete) to save the profile URL in the DB (small task)
- call the db to get the profile picture on load after successful login session is created and set it as the profile picture replacing the default github profile picture currently. (small task). Functions/DB communication all created already.
- refactor (small task)

"back of the napkin" Future considerations:
Performance/cost optimizations:
- alternative ways to store profile pic (Storing actual GIF in S3, etc.)
- alternative authorization
- extra credit requirements


