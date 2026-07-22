"use client";

import { useState, useRef, useEffect } from "react";

const tracks = [
  { title: "drop dead", artist: "Olivia Rodrigo", src: "/dropdead.mp3" },
  { title: "baby im back", artist: "The Kid Laroi", src: "/babyimback.mp3" },
  { title: "ask your self", artist: "—", src: "/askyourself.mp3" },
];

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node) && btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const play = (idx: number) => {
    if (!audioRef.current) return;
    if (idx === current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
      return;
    }
    setCurrent(idx);
    audioRef.current.src = tracks[idx].src;
    audioRef.current.play();
    setPlaying(true);
  };

  const changeVolume = (v: number) => {
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
      audioRef.current.muted = false;
      setMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="fixed bottom-24 md:bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <audio ref={audioRef} loop onEnded={() => {
        const next = (current + 1) % tracks.length;
        setCurrent(next);
        if (audioRef.current) {
          audioRef.current.src = tracks[next].src;
          audioRef.current.play();
        }
      }} />

      {open && (
        <div ref={panelRef} className="neo-border bg-white neo-shadow-sm p-2 w-48">
          <p className="font-black text-[10px] uppercase mb-1.5">Playlist</p>
          <div className="space-y-1 mb-2">
            {tracks.map((t, i) => (
              <button
                key={i}
                onClick={() => play(i)}
                className={`w-full text-left px-2 py-1.5 neo-border text-xs font-medium transition-all ${
                  i === current && playing
                    ? "bg-yellow neo-shadow-sm"
                    : "bg-white hover:bg-yellow"
                }`}
              >
                <span className="font-black">{t.title}</span>
                <span className="text-fg-secondary"> — {t.artist}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <button onClick={toggleMute} className="w-6 h-6 flex items-center justify-center hover:scale-105 transition-all">
              {muted || volume === 0 ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-full h-1.5 appearance-none bg-fg cursor-pointer"
              style={{ accentColor: "var(--fg)" }}
            />
          </div>
          {playing && (
            <div className="flex gap-0.5 items-end h-3 justify-center">
              {[0,1,2,3].map(i => (
                <span
                  key={i}
                  className="w-0.5 bg-fg rounded-full animate-bounce"
                  style={{
                    height: `${6 + i * 3}px`,
                    animationDelay: `${i * 0.12}s`,
                    animationDuration: "0.6s",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="w-9 h-9 md:w-11 md:h-11 neo-border bg-yellow neo-shadow-sm flex items-center justify-center hover:scale-105 transition-all"
        title="Music"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </button>
    </div>
  );
}
