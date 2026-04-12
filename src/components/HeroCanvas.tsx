import p5 from 'p5';
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sketch = (p: p5) => {
      const nodes: { x:number; y:number; nx:number; ny:number;
                     life:number; maxLife:number; r:number }[] = [];
      const N = 90;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.randomSeed(2024); p.noiseSeed(2024);
        for (let i = 0; i < N; i++) nodes.push({
          x: p.random(p.width), y: p.random(p.height),
          nx: p.random(1000), ny: p.random(1000),
          life: p.random(120), maxLife: p.random(80, 180),
          r: p.random(1.5, 4)
        });
      };

      p.draw = () => {
        p.clear();
        // connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i+1; j < nodes.length; j++) {
            const d = p.dist(nodes[i].x,nodes[i].y,nodes[j].x,nodes[j].y);
            if (d < 130) {
              const a = (1-d/130) * 0.35;
              p.stroke(200,169,110,a*255);
              p.strokeWeight(a*1.5);
              p.line(nodes[i].x,nodes[i].y,nodes[j].x,nodes[j].y);
            }
          }
        }
        // nodes
        for (const n of nodes) {
          n.life++;
          const dx = (p.noise(n.nx, p.frameCount*0.003)*2-1)*0.6;
          const dy = (p.noise(n.ny, p.frameCount*0.003)*2-1)*0.6;
          n.x += dx; n.y += dy;
          n.nx += 0.002; n.ny += 0.002;
          const lr = n.life/n.maxLife;
          let a = lr < 0.1 ? lr/0.1 : lr > 0.8 ? 1-(lr-0.8)/0.2 : 1;
          p.noStroke();
          p.fill(200,169,110,a*30); p.circle(n.x,n.y,n.r*5);
          p.fill(200,169,110,a*210); p.circle(n.x,n.y,n.r*2);
          if (n.life >= n.maxLife) {
            n.x=Math.random()*p.width; n.y=Math.random()*p.height; n.life=0;
            n.maxLife=p.random(80,180);
          }
        }
      };

      p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    const instance = new p5(sketch, ref.current!);
    return () => instance.remove();
  }, []);

  return <div ref={ref} style={{
    position:'absolute', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden'
  }} />;
}
