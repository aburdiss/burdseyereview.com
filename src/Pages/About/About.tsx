export default function About() {
  return (
    <div>
      <h1>About</h1>

      <p>
        We're Alex and Courtney Burdiss. We love finding new, cool things to
        read, watch, do, and are making this blog for us to record what we
        thought, but also if you are interested your'e welcome to follow along!
      </p>

      <h2>Rating Scale</h2>

      <p>
        We have based our rating scale on{' '}
        <a href="https://boardgamegeek.com/wiki/page/ratings#">
          Board Game Geek's rating scale
        </a>
        , which we find to be pretty comprehensive and provide a decent amount
        of meaning to what could be subjective numerical values.
      </p>

      <ol reversed>
        <li>
          Outstanding. Always want to interact, expect this will never change.
        </li>
        <li>Excellent. Always willing to interact.</li>
        <li>
          Very good. Enjoy this a lot, suggest it, and will likely never turn it
          down.
        </li>
        <li>Good. Usually willing to consider.</li>
        <li>Fair. Would occasionally consider again if in the right mood.</li>
        <li>Average. No significant appeal.</li>
        <li>Not so good. Doesn't get me.</li>
        <li>Poor. Likely won't interact with again.</li>
        <li>Very poor. Annoying. I never want to interact with this again.</li>
        <li>You won't catch me dead with this.</li>
      </ol>
    </div>
  );
}
