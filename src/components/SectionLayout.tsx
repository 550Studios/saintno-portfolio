import { component$, Slot } from "@builder.io/qwik";

export const SectionLayout = component$(() => {
  return (
    <div class="flex w-full flex-row h-screen items-center justify-center relative snap-start m-auto">
      <Slot />
    </div>
  );
});
