const Footer = () => {
  return (
    // Same size and colour as the prose above it: the footer inherits the body size
    // (95%, 15.2px) and takes the grey the guide text uses, so it closes the page
    // instead of shouting over it.
    <footer className='p-y-80 p-x-24 tc c-grey bg-footer'>
      {/* The navigation used to repeat the header link by link. With the header fixed it
          is on screen the whole time, so repeating it added nothing; the footer now
          carries the two documents that belong there and nowhere else. */}
      <nav>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookies">Cookie Policy</a>
      </nav>
      <p className='p-t-24'>Documentation for Uny AI - Theme with Flexible Section Builder<br />&copy; 2026 emagweb. All rights reserved.</p>
    </footer>
  );
};
export { Footer }
