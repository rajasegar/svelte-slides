<script>
    import { onMount } from 'svelte';
 import Slide from '../lib/Slide.svelte';
 import Code from '../lib/Code.svelte';

    let title;
    onMount(() => {
        let timeout;
        title = new Promise(resolve => {
            timeout = setTimeout(() => resolve('Whats nice together?'), 1000);
        });
        () => clearTimeout(timeout);
    });
</script>

<Slide>
    <h2>
        {#await title}
            Wait a sec...
        {:then result}
            {result}
        {/await}
    </h2>

		<Code lineNumbers trim noescape>
    {
    `const name = "hello world";
    if(name === 'hello') {
      console.log('world');
    }
    `
    }
		</Code>
</Slide>
