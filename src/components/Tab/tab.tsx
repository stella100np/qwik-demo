import { useStore, component$, Host,createContext, useContextProvider,useContext } from '@builder.io/qwik';
export interface SharedState {
  value: string;
}
export const MyContext = createContext<SharedState>('tab-group-context');
export const TabGroup = component$(() => {
  const state = useStore<SharedState>({
    value:''
  })
  useContextProvider(MyContext,state)
  return (
    <Host>
      <div>
        TabGroup
      </div>
    </Host>
  );
});
export const TabList = component$(() => {
  const state = useContext(MyContext);
  return (
    <Host>
      <div>
        TabList
      </div>
    </Host>
  );
});

export const TabPanels = component$(() => {
  return (
    <Host>
      <div>
        TabPanels
      </div>
    </Host>
  );
});

export const TabPanel = component$(() => {
  return (
    <Host>
      <div>
        TabPanel
      </div>
    </Host>
  );
});