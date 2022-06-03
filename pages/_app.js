import '../styles/globals.scss'
import TweetEmbed from 'react-tweet-embed';<TweetEmbed id="692527862369357824" />

function MyApp({ Component, pageProps }) {
  return (
    <>
    <TweetEmbed id="692527862369357824" placeholder={'loading'} />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
