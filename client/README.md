This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## プロジェクトの作成
```npx create-next-app client --ts```
Need to install the following packages:
  create-next-app@13.4.19
Ok to proceed? (y) y
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes

## APIディレクトリ
### package.json作成
```npm init -y```
### EXPRESSとnodemonインストール
```npm i express nodemon```

## supabase
サイト：https://supabase.com/dashboard/project/blputnmvdjzlofwwbuhr/editor/28573
ID : developsolt@gmail.com
Pass: いつもの
DBname: vocallery
DBpass: vocallery-enzi

.env
DATABASE_URL="postgresql://postgres:vocallery-enzi@db.wfijvtyuetfeycepidnc.supabase.co:5432/postgres"

## prismaのインストール
document:https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql
```npm i prisma```
### 初期化
```npx prisma init```
### 初期マイグレーション
```npx prisma migrate dev --name init```
※.envファイルにURL設定しないとエラーになる
### プリズマ更新
```npx prisma migrate dev```
### prismaクライアントのインストール
```npm i @prisma/client```

## bcript(パスワードのハッシュ化)
URL:https://www.npmjs.com/package/bcrypt
```npm i bcrypt```

## JWTのインストール
URL:https://jwt.io/
```npm i jsonwebtoken```

## .envのインストール
```npm i dotenv```

## axiosのインストール
```npm i axios```
※apiClient.tsにbaseURLをport込みで書いているのでバックエンドのport変わる場合は変更する

## CORSインストール
```npm i cors```

## supabaseをいちいち開きたくない
```npx prisma studio```

## Identicon
```npm install identicon.js --save```

## NextUI
```npm i @nextui-org/react framer-motion```
### ダークモードtheme
```npm i next-themes```
### アイコン
```npm install @heroicons/react```

## SASS
```npm i sass```

## スライドショー
```npm install swiper@latest```

## ionicons
```npm i ionicons```
