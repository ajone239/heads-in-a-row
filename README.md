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

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.
