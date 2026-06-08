# ChillGhar
ChillGhar helps you discover the best chill spots in your city — cafes, rooftops, live music
,gaming zones, nature spots, and events. Users can browse listings, search places, view details, sign up or log in, create listings, upload images, and leave reviews.

## Features

- User authentication with signup, login, logout, and persistent sessions
- Protected routes for creating, editing, and deleting listings
- Owner-only listing edit/delete authorization
- Listing categories such as Club, Cafe, Live Music, Rooftop, Gaming Zone, Nature, and Event
- Search listings by title
- Cloudinary image upload support with Multer
- Review and rating system
- Review-author-only delete protection
- Flash messages for success and error feedback
- Server-side validation using Joi
- MongoDB session storage using connect-mongo
- Guest listing preview with blurred listings until the user logs in or signs up
- Responsive EJS views styled with Bootstrap and custom CSS

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS and EJS Mate
- Passport.js
- passport-local-mongoose
- Express Session
- Connect Flash
- Connect Mongo
- Joi
- Multer
- Cloudinary
- Bootstrap
- Font Awesome

## Project Structure

```txt
ChillHouse/
|-- app.js
|-- cloudConfig.js
|-- middleware.js
|-- schema.js
|-- controllers/
|   |-- listings.js
|   |-- reviews.js
|   `-- users.js
|-- models/
|   |-- listing.js
|   |-- review.js
|   `-- user.js
|-- routes/
|   |-- listings.js
|   |-- review.js
|   `-- user.js
|-- views/
|   |-- includes/
|   |-- layouts/
|   |-- listings/
|   `-- users/
|-- public/
|   |-- css/
|   `-- js/
`-- init/
```


## Environment Variables

| Variable | Description |
| --- | --- |
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET_CODE` | Secret used for sessions and session-store encryption |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

## Main Routes

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/listings` | Show all listings |
| `GET` | `/listings/new` | Show new listing form |
| `POST` | `/listings` | Create a new listing |
| `GET` | `/listings/:id` | Show listing details |
| `GET` | `/listings/:id/edit` | Edit listing form |
| `PUT` | `/listings/:id` | Update listing |
| `DELETE` | `/listings/:id` | Delete listing |
| `GET` | `/listings/search` | Search listings |
| `GET` | `/listings/cate/:categories` | Filter by category |
| `POST` | `/listings/:id/reviews` | Add review |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete review |
| `GET` | `/signup` | Signup page |
| `POST` | `/signup` | Create account |
| `GET` | `/login` | Login page |
| `POST` | `/login` | Login user |
| `GET` | `/logout` | Logout user |

## Current Authentication Flow

Visitors can preview the listings page, but the content is blurred until they log in or create an account. Authenticated users can create listings, upload images, edit or delete their own listings, and write reviews.

## Validation And Security

- Joi validates listing and review data before saving.
- Passport handles username/password authentication.
- Session data is stored in MongoDB.
- Listing ownership is checked before edit/delete actions.
- Review author is checked before review deletion.

## Future Improvements

- Separate user and admin roles
- Admin dashboard for managing owned listings
- User profile page
- Wishlist or favorite listings
- Advanced filters by location, price, category, and rating
- Average rating display on listing cards
- Multiple images per listing
- Booking or table reservation system
- Email confirmation for bookings
- Map integration
- Better test coverage
- Production security improvements such as rate limiting, Helmet, and CSRF protection




