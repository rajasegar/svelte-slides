<script>
 import Notes from '../lib/Notes.svelte';
 import Youtube from '../lib/Youtube.svelte';

</script>

<section>
    <h2 class="text-yellow-500">Getting started</h2>
    <ul>
        <li class="fragment fade-up">Configure your Presentation in <code>config.js</code></li>
        <li class="fragment fade-up">Create your Slides in <code>src/slides</code></li>
        <li class="fragment fade-up">Add your Slides in <code>Presentation.svelte</code></li>
    </ul>
		<div class="grid place-items-center">
				<Youtube url="https://www.youtube.com/watch?v=xcDUpe1NfCQ"/>
		</div>
		<Notes>This is an example of slide notes</Notes>
</section>
