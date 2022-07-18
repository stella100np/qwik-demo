import { useStore, component$, Host } from '@builder.io/qwik';
import { Logo } from '../logo/logo';
import { Map } from "./map";

export const App = component$(() => {
  const state = useStore({ name: 'World' });
  return (
    <Host class="my-app h-screen">
      <h1 class="text-center text-cyan-500 font-mono text-2xl">qwik map demo</h1>
      <Map></Map>
    </Host>
  );
});
