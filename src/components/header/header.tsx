import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { appCtx } from "~/routes/layout";
import styles from "./header.css?inline";

export default component$(() => {
  const appState = useContext(appCtx);
  useStylesScoped$(styles);

  return (
    <header class="py-4 px-8 dark:text-white absolute top-0 w-full">
      <ul class="flex flex-row justify-end gap-8">
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
        <li>
          <button onClick$={() => (appState.dark = !appState.dark)}>
            <span class="material-symbols-outlined">
              {appState.dark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </li>
      </ul>
    </header>
  );
});
