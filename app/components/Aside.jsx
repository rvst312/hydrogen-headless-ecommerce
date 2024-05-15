import { CloseIcon } from './icons/icon';
import { useNavigate } from "@remix-run/react";

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
          <br />
        </main>
      </aside>
    </div>
  );
}

function CloseAside() {
  {/*const handleClose = () => {
    window.history.go(-1); 
    window.history.replaceState(null, '', window.location.pathname);
    // window.history.replaceState({}, null, window.location.pathname); // or ({}, "", window.location.pathname) posible corrección safari browser
  };*/}
  const navigate = useNavigate();

  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid 
    <a className="close" href="#" onClick={(e) => {
      e.preventDefault(); 
      handleClose(); 
    }}>
      <CloseIcon />
    </a>*/
    
    <button
      className="close"
      onClick={() => {
        navigate(-1);
        window.location.hash = '';
      }}>
      <CloseIcon />
    </button>
  );
}

export default CloseAside;