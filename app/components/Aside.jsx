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
  const navigate = useNavigate();

  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      <button
        className="close-outside"
        onClick={() => {
          navigate(-1);
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
  const navigate = useNavigate();

  return (
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
