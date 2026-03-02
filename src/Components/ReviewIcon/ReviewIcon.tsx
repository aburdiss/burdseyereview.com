import { BsFillDice3Fill, BsMusicNoteBeamed, BsBook, BsFilm } from 'react-icons/bs';

export default function ReviewIcon({ type }: { type: string }) {
  return {
    games: <BsFillDice3Fill size="20" title="Game" />,
    music: <BsMusicNoteBeamed size="20" title="Music" />,
    books: <BsBook size="20" title="Book" />,
    films: <BsFilm size="20" title="Film" />
  }[type];
}
