# Hello Adim Team

Can't make this private since I forked a copy from your repo -- Can delete later

Deployed Demo [HERE](https://4-hour-take-home.vercel.app/)

Thank you so much for the time you've already invested in considering me. I got awfully close to finishing everythign in the alotted time, but didn't quite finish. I wasn't too familiar with a bit of the tooling so most of my time was spent ramping up. Also, the requirements stated "User" implying authorization to tie a user to a session and be able to save profile pictures, and I did plan off of this presumption.

 I started with planning, and chose to start with the most difficult problems including a few of the stretch goals first, very confident I could get it all done. I'm an honest man, so I'm pushing up what I have done, and didn't get it quite finished in the four hours. It truly is the easiest work left.

Here's what IS finished, which was the bulk of the work:

- OAuth integration with Github for easy login/logout experience
- integration with GIPHY api
- Basic UX/UI for login/logout and profile picture selection
- env variables created and securely stored, and specified for error prevention during build
- All BE plumbing is complete and type-secured to save profile pictures to a user account based on the GitHub userID in the session. Leveraged TRPC/prisma routers
- Deployed application on Vercel
- default profile pic from their github profile
- DB call on load to set the user profile picture to the GIF if they have one saved
- deployed database using supabase

Basic remainder work:

- add a save button that calls the api (function and BE "plumbing" already complete) to save the profile URL in the DB (small task)
- refactor (small task)

"back of the napkin" Future considerations:
Performance/cost optimizations:
- alternative ways to store profile pic (Storing actual GIF in S3, etc.)
- alternative authorization
- extra credit requirements


