<script lang="ts">
  import { EventHandler } from './utils/eventHandler';
  import debugMode from './stores/debugStore';
  import { App, Page, Navbar, Block } from 'konsta/svelte';

  EventHandler();
</script>

<main class={`min-h-screen ${debugMode ? 'bg-dark-300':''}`}>
  <App theme="ios">
    <Page>
      <Navbar title="My App" />
      <Block>
        <p>Here comes my app</p>
      </Block>
    </Page>
  </App>
</main>
