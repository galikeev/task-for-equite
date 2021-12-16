import { ThemeProvider } from '@mui/system';

import Head from 'next/head';
import App from '../components/app/app';
import theme from '../components/theme';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/gotham-pro" rel="stylesheet"></link>
      </Head>

      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>

      
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url('/bg.png') no-repeat bottom, url('/img.png') no-repeat top right / 70%;
          background-color: #101C2B;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Gotham Pro;
        }

        a {
          text-decoration: none;
          color: inherit;
          display: inline-block;
          a:hover {
              text-decoration: none;
              color: inherit;
          }
        }

        ul,
        li,
        dl,
        ol {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
