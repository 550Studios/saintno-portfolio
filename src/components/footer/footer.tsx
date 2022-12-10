import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="w-full dark:bg-zinc-900 bg-zinc-50 flex dark:text-white px-10 py-4 font-thin text-sm snap-start">
      <div class="flex-auto flex gap-2">
        <span>
          <strong>@Saintno</strong> 2022, Made with Qwik
        </span>
        <img alt="qwik-logo" src="/imgs/qwik-logo.png" width={18} />
      </div>
      <div class="flex gap-3">
        <a href="https://fb.com/tctien342">
          <i class="devicon-facebook-plain"></i>
        </a>
        <a href="https://www.linkedin.com/in/saintno">
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a href="http://github.com/tctien342">
          <i class="devicon-github-plain"></i>
        </a>
      </div>
    </footer>
  );
});
