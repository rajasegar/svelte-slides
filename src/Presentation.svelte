<script>
    import Title          from './slides/Title.svelte';
    import Love           from './slides/Love.svelte';
    import GettingStarted from './slides/GettingStarted.svelte';

    const partner = ['Svelte', 'Reveal.js'];
</script>

<Title/>
<Love {partner}/>
<GettingStarted/>

