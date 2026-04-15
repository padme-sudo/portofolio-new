"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const onMouseDown = () => {
      gsap.to(follower, { scale: 0.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    const handleHover = (isHovering: boolean) => {
      gsap.to(follower, {
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: isHovering ? 0 : 1,
        duration: 0.2,
      });
    };

    const addHoverListeners = () => {
      const links = document.querySelectorAll("a, button, [role='button']");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => handleHover(true));
        link.addEventListener("mouseleave", () => handleHover(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    
    // Initial listeners
    addHoverListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform"
      />
    </>
  );
}
