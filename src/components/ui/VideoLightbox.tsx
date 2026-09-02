import { useEffect, useRef } from 'react';

type Props = {
  open: boolean;
  src: string;
  poster?: string;
  onClose: () => void;
};

/** Modal video player. Pauses and rewinds on close so it never plays in the background. */
export function VideoLightbox({ open, src, poster, onClose }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el) return;

    if (open) {
      closeBtn.current?.focus();
      void el.play().catch(() => {
        /* autoplay blocked — the user can hit the native control */
      });
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`vbox${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeBtn}
        type="button"
        className="vbox__close"
        onClick={onClose}
        aria-label="Close video"
      >
        &times;
      </button>
      <div className="vbox__frame">
        <video ref={video} src={src} poster={poster} controls playsInline preload="none" />
      </div>
    </div>
  );
}
