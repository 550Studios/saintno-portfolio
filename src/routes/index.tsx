import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import { SectionLayout } from "~/components/SectionLayout";
import { useCyberAnimation } from "~/hooks/useCyberAnimation";

export default component$(() => {
  useCyberAnimation("canvas");

  return (
    <div class="w-full dark:text-white h-screen overflow-auto snap-y content-container">
      <SectionLayout>
        <div class="min-w-[50%] text-xl flex flex-col">
          <div class="typewriter pixel text-2xl lg:text-3xl">
            <span>Hello, my name is Tien</span>
          </div>
          <p class="text-xs font-bold opacity-60">
            An developer, who always keep learning new things
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
              style={{ filter: "drop-shadow(0px -10px 24px #cccccc50)" }}
              class="w-full max-w-[300px] absolute bottom-0 z-10"
            />
          </div>
        </div>
        <div class="absolute bottom-10 flex flex-col gap-2 justify-center items-center">
          <span class="pixel animate-pulse">Explorer my journey</span>
          <span class="material-symbols-outlined animate-bounce">
            expand_more
          </span>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div class="min-w-[50%] text-xl flex flex-col">
          <div class="typewriter pixel text-2xl lg:text-3xl">
            <span>Hello, my name is Tien</span>
          </div>
          <p class="text-xs font-bold opacity-60">
            An developer, who always keep learning new things
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
              style={{ filter: "drop-shadow(0px -10px 24px #cccccc50)" }}
              class="w-full max-w-[300px] absolute bottom-0 z-10"
            />
          </div>
        </div>
        <div class="absolute bottom-10 flex flex-col gap-2 justify-center items-center">
          <span class="pixel animate-pulse">Explorer my journey</span>
          <span class="material-symbols-outlined animate-bounce">
            expand_more
          </span>
        </div>
      </SectionLayout>
      <Footer />
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
