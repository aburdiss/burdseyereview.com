import en from '@/constants/en.json';

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
        <li>{en.rating10}</li>
        <li>{en.rating9}</li>
        <li>{en.rating8}</li>
        <li>{en.rating7}</li>
        <li>{en.rating6}</li>
        <li>{en.rating5}</li>
        <li>{en.rating4}</li>
        <li>{en.rating3}</li>
        <li>{en.rating2}</li>
        <li>{en.rating1}</li>
      </ol>
    </div>
  );
}
