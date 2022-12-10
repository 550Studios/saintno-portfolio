import { useClientEffect$, useContext } from "@builder.io/qwik";
import { appCtx } from "~/routes/layout";

export const useCyberAnimation = (canvasId: string) => {
  const appState = useContext(appCtx);
  useClientEffect$(async ({ track }) => {
    const dark = track(() => appState.dark);
    const state = {
      fps: 30,
      color: dark ? "rgb(236,236,255)" : "black",
      charset: "0123456789ABCDEF",
      p: [],
    };

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      const w = (canvas.width = innerWidth);
      const h = (canvas.height = innerHeight);
      const p = Array(Math.ceil(w / 10)).fill(0);

      const random = (items: string) =>
        items[Math.floor(Math.random() * items.length)];

      const draw = () => {
        ctx.fillStyle = dark ? "rgba(39,39,42,.3)" : "rgba(255,255,255,.3)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = state.color;

        for (let i = 0; i < p.length; i++) {
          const v = p[i];
          ctx.fillText(random(state.charset), i * 10, v);
          p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + 10;
        }
      };

      const renderer = setInterval(draw, 1000 / state.fps);

      return () => clearInterval(renderer);
    }
  });
};
