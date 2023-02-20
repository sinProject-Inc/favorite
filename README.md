# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


update tailwindcss
```bash
npx tailwindcss -i ./src/lib/assets/css/tailwind.css -o ./src/lib/assets/css/dist/tailwind.css --watch
```


<br>

#### timeline
  ##### not sign in:
  - サイドバーはsign inボタンのみ表示
  - postの閲覧が可能
  - 何かの操作をしようとするとsign inを求める

  ##### sign in:
  - e-mail registered:
    - timelineを表示
    - サイドバーはsign inボタン以外の全てを表示
    - 操作可能

  - e-mail not registered:
    - profile edit画面へ強制遷移
    - save処理後にtimelineを表示
    - サイドバーはsign inボタン以外の全てを表示
    - 操作可能
