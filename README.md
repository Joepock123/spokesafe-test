# Spokesafe Tech Test

- [Website link](https://spokesafe-test.vercel.app/)
- [Front-end repo](https://github.com/Joepock123/spokesafe-test)
- [Back-end repo](https://github.com/Joepock123/spokesafe-server)

## User Stories - Project A

- As a user I want to be able to cancel my booking and obtain credits to use at a later date.

## Acceptability criteria

- [x] The user has secure access to their account
- [x] When the booking is cancelled the credits are added to the user's balance.

## Requirements

- [x] Web app: Next.js deployed on Vercel
- [x] REST endpoint: GET and PUT endpoints on Express server hosted on Heroku
- [x] Postgres database hosted on Heroku
- [x] Promises/async functions
- [x] Readme
- [x] Secure access: OAuth login and authentication using `@auth0/nextjs-auth0` package
- [ ] Test

### Further information

- [ ] Styled using Styled Components

## Challenges

- Meeting the requirements in 3 hours. Setting up the infrastructure consumed 3 hours alone due to difficulties using Next.js for the first time.
- Using Next.js for the first time.
  - Generally it was easy to follow the documentation and the deployment on Vercel was quick and simple to setup.
  - I planned to use serverless functions using Next.js API Routes to communicate with the domain layer but ran into difficulties and due to time limitations switched to a more familiar express server.

## Next steps

- Build out domain to include reservations table. Allow the user to create and modify bookings.
- Abstract and tidy the code, especially on the server.
- Use Stripe to manage the customers' balance and payment details.
- Adding authentication to the API routes so only the user can access their data (currently the userId is sent in the params so once logged in a user can access anyones balance data.)

## Learning and further interests

- Using a new technology for a tech test was a brave choice!
- I'd like to explore Next.js serverless functions further and get them to work with a database.
