import { useEffect, useRef, useState } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [influence, setInfluence] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    // Matrix characters
    const chars = '01';
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: { y: number; speed: number; opacity: number; }[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: 2 + Math.random() * 5,
        opacity: Math.random()
      };
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Calculate distance from mouse to center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      
      // Set influence based on distance from center (0 to 1)
      setInfluence(1 - Math.min(distance / (maxDistance * 0.5), 1));
    };

    // Animation loop
    let animationFrameId: number;
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      // Calculate influence area around mouse
      const influenceRadius = Math.max(canvas.width, canvas.height) * 0.3;
      
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const drop = drops[i];
        
        // Calculate distance from mouse
        const dx = x - mousePos.x;
        const dy = drop.y * fontSize - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply influence if within radius
        if (distance < influenceRadius) {
          const force = (1 - distance / influenceRadius) * influence * 2;
          drop.y += Math.sin(force * Math.PI) * 0.5;
          
          // Change color based on influence
          const hue = 180 + (force * 40); // Blue to cyan
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${drop.opacity})`;
        } else {
          // Default color
          ctx.fillStyle = `rgba(0, 212, 255, ${drop.opacity})`;
        }
        
        // Draw character
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, x, drop.y * fontSize);

        // Reset drop if it goes below canvas or randomly
        if (drop.y * fontSize > canvas.height + 20 || (drop.y > 10 && Math.random() > 0.99)) {
          drop.y = -Math.random() * 20;
          drop.opacity = 0.1 + Math.random() * 0.9;
          drop.speed = 1 + Math.random() * 3;
        }
        
        // Move drop down
        drop.y += drop.speed * 0.1;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateCanvasSize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [mousePos, influence]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
