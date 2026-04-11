import { useEffect, useRef } from 'react'
import p5 from 'p5'

type Node = {
  x: number
  y: number
  seedX: number
  seedY: number
  age: number
  lifespan: number
  phaseIn: number
  phaseOutStart: number
}

const NODE_COUNT = 100
const GRID_SIZE = 60
const CONNECTION_DISTANCE = 130

export default function HeroCanvas() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = ref.current
    if (!mount) return

    const goldFromCss = getComputedStyle(document.documentElement).getPropertyValue('--gold').trim()
    const nodeColor = goldFromCss || '#C8A96E'

    const sketch = (p: p5) => {
      const nodes: Node[] = []
      let nodeColorValue: p5.Color

      const spawnNode = (node?: Node) => {
        const lifespan = p.random(520, 900)
        const phaseIn = p.random(80, 160)
        const phaseOut = p.random(100, 190)
        const target = node ?? ({} as Node)

        target.x = p.random(0, p.width)
        target.y = p.random(0, p.height)
        target.seedX = p.random(1000)
        target.seedY = p.random(1000)
        target.age = 0
        target.lifespan = lifespan
        target.phaseIn = phaseIn
        target.phaseOutStart = lifespan - phaseOut

        return target
      }

      const lifeAlpha = (node: Node) => {
        if (node.age < node.phaseIn) {
          return p.map(node.age, 0, node.phaseIn, 0, 1, true)
        }

        if (node.age > node.phaseOutStart) {
          return p.map(node.age, node.phaseOutStart, node.lifespan, 1, 0, true)
        }

        return 1
      }

      const drawGrid = () => {
        p.stroke(200, 169, 110, 10)
        p.strokeWeight(1)

        for (let x = 0; x <= p.width; x += GRID_SIZE) {
          p.line(x, 0, x, p.height)
        }

        for (let y = 0; y <= p.height; y += GRID_SIZE) {
          p.line(0, y, p.width, y)
        }
      }

      p.setup = () => {
        p.createCanvas(mount.clientWidth, mount.clientHeight)
        p.noFill()
        nodeColorValue = p.color(nodeColor)

        for (let i = 0; i < NODE_COUNT; i += 1) {
          nodes.push(spawnNode())
        }
      }

      p.draw = () => {
        p.clear()
        drawGrid()

        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i]
          node.age += 1

          const t = p.frameCount * 0.0025
          const vx = p.map(p.noise(node.seedX, t), 0, 1, -0.55, 0.55)
          const vy = p.map(p.noise(node.seedY, t), 0, 1, -0.55, 0.55)

          node.x += vx
          node.y += vy

          if (node.x < -15) node.x = p.width + 15
          if (node.x > p.width + 15) node.x = -15
          if (node.y < -15) node.y = p.height + 15
          if (node.y > p.height + 15) node.y = -15

          if (node.age >= node.lifespan) {
            spawnNode(node)
          }
        }

        for (let i = 0; i < nodes.length; i += 1) {
          const a = nodes[i]

          for (let j = i + 1; j < nodes.length; j += 1) {
            const b = nodes[j]
            const distance = p.dist(a.x, a.y, b.x, b.y)

            if (distance > CONNECTION_DISTANCE) continue

            const fadeByDistance = 1 - distance / CONNECTION_DISTANCE
            const fadeByLife = Math.min(lifeAlpha(a), lifeAlpha(b))
            const alpha = Math.min(60, fadeByDistance * fadeByLife * 60)

            p.stroke(200, 169, 110, alpha)
            p.strokeWeight(1)
            p.line(a.x, a.y, b.x, b.y)
          }
        }

        p.noStroke()

        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i]
          const alpha = lifeAlpha(node)
          const nodeInk = p.color(nodeColorValue)
          nodeInk.setAlpha(255 * alpha)
          p.fill(nodeInk)
          p.circle(node.x, node.y, 2.8)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(mount.clientWidth, mount.clientHeight)
      }
    }

    const instance = new p5(sketch, mount)
    return () => instance.remove()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
