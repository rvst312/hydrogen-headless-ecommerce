import { CloseIcon } from './icons/icon';

/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   heading: React.ReactNode;
 *   id?: string;
 * }}
 */
export function Aside({ children, heading, id = 'aside' }) {
  
  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      <button
        className="close-outside"
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside>
        <header>
          {/* heading */}
          <CloseAside />
        </header>
        <main>
          {children}
          <br/>
        </main>
      </aside>
    </div>
  );
}

function CloseAside() {
  const handleClose = () => {
    window.history.go(-1); 
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a className="close" href="javascript:void(0)" onClick={handleClose}>
      <CloseIcon />
    </a>
  );
}

export default CloseAside;