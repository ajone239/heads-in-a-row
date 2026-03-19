# Head In a Row

How many can you get!

## Developing

Once you've created a project and installed dependencies with `npm install` start a development server:

```sh
npm run dev

# auto open
npm run dev -- --open

# expose to lan
npm run dev -- --host
```

### Drizzle ORM:
  - Check `DATABASE_URL` in `.env` and adjust it to your needs
  - Run `npm run db:push` to update your database schema

## Testing API routes with curl

`better-auth` uses cookies for authentication. Sign in first to capture the session cookie:

```sh
# Sign in and save cookies to a file
curl -X POST http://localhost:5173/api/auth/sign-in/email \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"yourpassword"}' \
  -c cookies.txt

# Use the saved cookies on subsequent requests
curl -X POST http://localhost:5173/api/flip -b cookies.txt
```

Or pass the session cookie directly from browser devtools:

```sh
curl -X POST http://localhost:5173/api/flip \
  -H "Cookie: better-auth.session_token=<your-token-here>"
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.
