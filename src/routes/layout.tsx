import {
  component$,
  createContext,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";

export type TAppState = { dark: boolean };
export const appCtx = createContext<TAppState>("AppGlobalCtx");

export default component$(() => {
  const appStore = useStore<TAppState>({ dark: true });
  useContextProvider(appCtx, appStore);

  return (
    <div class={appStore.dark ? "dark" : ""}>
      <div class="bg-white dark:bg-zinc-800 transition-all">
        <Header />
        <div class="flex w-full justify-center items-center">
          <main class="w-full">
            <section>
              <Slot />
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
});
