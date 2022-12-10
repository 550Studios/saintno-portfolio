import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useCyberAnimation } from "~/hooks/useCyberAnimation";

export default component$(() => {
  useCyberAnimation("canvas");

  return (
    <div class="w-full dark:text-white">
      <div class="flex w-full flex-row h-screen items-center">
        <div class="min-w-[50%] text-xl flex flex-col">
          <div class="typewriter pixel text-2xl">
            <span>Hello, my name is Tien</span>
          </div>
          <p class="text-xs font-bold opacity-60">
            A human who try to live in hard mode
          </p>
        </div>
        <div class="w-full flex justify-center items-center">
          <div class="relative w-full rounded-full aspect-square overflow-hidden shadow-lg z-10 flex justify-center items-center">
            <div class="absolute z-0">
              <canvas id="canvas" class="z-0" />
            </div>
            <img
              alt="avatar"
              src="/imgs/avatar-emoji.png"
              style={{ filter: "drop-shadow(0px -10px 24px #ccc)" }}
              class="w-full max-w-[300px] absolute bottom-0 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Saintno Portfolio",
  links: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    },
  ],
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
