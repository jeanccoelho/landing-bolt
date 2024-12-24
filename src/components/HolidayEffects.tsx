import React, { useEffect, useState } from 'react';

export function HolidayEffects() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; duration: string }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: string }>>([]);

  useEffect(() => {
    // Create snowflakes
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 5}s`
    }));
    setSnowflakes(flakes);

    // Create stars
    const starArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`
    }));
    setStars(starArray);
  }, []);

  return (
    <>
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            fontSize: '1rem',
            content: '❄'
          }}
        >
          ❄
        </div>
      ))}
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size
          }}
        />
      ))}
    </>
  );
}