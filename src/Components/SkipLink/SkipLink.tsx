import './SkipLink.css';

export default function SkipLink() {
  function sendFocusToMainContent() {
    const mainContentId = '#main-content';
    const main: HTMLElement | null = document.querySelector(mainContentId);
    main?.focus();
  }
  return (
    <button className="skip-link" onClick={sendFocusToMainContent}>
      Skip to main content
    </button>
  );
}
