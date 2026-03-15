import { MdMailOutline, MdShare } from 'react-icons/md';
import './Share.css';

export default function Share({ title }: { title?: string }) {
  const formattedTitle = `${title ? title + ' ' : ''}Burd's Eye Review`;
  async function nativeShare() {
    try {
      await navigator?.share({
        title: formattedTitle,
        text: window.location.href,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="share-container">
      <span>Share:</span>
      <a
        href={`mailto:?subject=${encodeURIComponent(formattedTitle)}&body=${encodeURIComponent('Hey there, check out this review: ')}${window.location.href}`}
      >
        <MdMailOutline />
      </a>
      {navigator?.canShare({
        title: formattedTitle,
        text: window.location.href,
      }) && (
        <button className="button-reset" onClick={nativeShare}>
          <MdShare />
        </button>
      )}
    </div>
  );
}
