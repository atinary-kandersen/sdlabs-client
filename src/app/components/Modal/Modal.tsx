import { createRef, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function Modal({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundPathname = location.state.backgroundPathname;

  if (!backgroundPathname) {
    throw new Error('Modal must be linked to with "backgroundPathname" in the state:');
  }

  const dialogRef = createRef<unknown>();

  useEffect(() => {
    const dialog = dialogRef.current as unknown as HTMLDialogElement; // TODO: Fix type casting.
    const onHide = (event: Event) => {
      if (event.target !== dialog) {
        return;
      }
      navigate(backgroundPathname);
    };

    dialog.addEventListener('wa-after-hide', onHide, { once: true });
    requestAnimationFrame(() => (dialog.open = true));

    return function cleanup() {
      dialog.removeEventListener('wa-after-hide', onHide);
    };
  }, []);

  return (
    <wa-dialog ref={dialogRef} style={{ '--width': 'min(95vw, 1000px)' }} with-footer>
      {children}
    </wa-dialog>
  );
}
