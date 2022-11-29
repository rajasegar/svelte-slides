# Reveal.js + Svelte + Vite + TailwindCSS

![Svelte Slides logo](public/svelte-slides.jpg)

This template should help get you started creating awesome slide decks using [Reveal.js](https://revealjs.com) with Svelte in Vite.
You can also use [TailwindCSS](https://tailwindcss.com) utility classes to style your slide contents.

## How does it work?
- Your slides are both Svelte components and Reveal.js slides.
- You can have one or more slides (using `<section/>`) within a single Svelte component.
- Create new slides as Svelte components under `src/slides`
- Just import and include your components inside the `src/Presentation.svelte` component
- That's it, you are good to go.

## Configuring Reveal.js
You can customize the `Reveal.js` setup in `src/config.js`.


## Sample slide
### src/Title.svelte
You can insert code blocks using template literals inside `<pre>` and `<code>` elements.
```html
<section>
<h1>This is a sample slide</h1>
<ul>
<li>Apples</li>
<li>Oranges</li>
<li>Grapes</li>
</ul>

<h2>Sample code</h2>

    <pre>
    <code data-line-numbers data-trim data-no-escape>
    {`
      const name = "hello world";
      if(name === 'hello') {
        console.log('world');
      }
    `}
    </code>
    </pre>
</section>
```

### src/Presentation.svelte
The slide order is the order in which you layout your Svelte components.

```html
<script>
    import Title          from './slides/Title.svelte';
    import Love           from './slides/Love.svelte';
    import GettingStarted from './slides/GettingStarted.svelte';

    const partner = ['Svelte', 'Reveal.js'];
</script>

<Title/>
<Love {partner}/>
<GettingStarted/>

```

## Built-in Components
### Slide
A component for slide with all the options supported 
```html
<Slide bgColor="red">
<h1>This is a sample slide</h1>
<ul>
<li>Apples</li>
<li>Oranges</li>
<li>Grapes</li>
</ul>
</Slide>
```

Please refer to [src/lib/Slide.svelte](src/lib/Slide.svelte) for more information about the props.


### Code
A component to render code blocks
```html
<Code trim={true} lineNumbers="1|2-4" >
    {`
      const name = "hello world";
      if(name === 'hello') {
        console.log('world');
      }
    `}
</Code>
```

Please refer to [/src/lib/Code.svelte](/src/lib/Code.svelte) for more information about the props.

### Notes
A component for speaker notes
```html
<Notes>
Hello Everyone, I am using svelte-slides for this presentation
</Notes>
```

### Youtube
A component embedding YouTube videos
```
<Youtube url="https://www.youtube.com/watch?v=1lcPGnRL4Qo"/>
```

Please refer to [/src/lib/Youtube.svelte](/src/lib/Youtube.svelte) for more information about the props.

## Inspiration
This project is inspired by [svelte-reveal-boilerplate](https://github.com/micschwarz/svelte-reveal-boilerplate/) 

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## References
- [Svelte](https://svelte.dev)
- [Vite.js](https://vitejs.dev)
- [Reveal.js](https://revealjs.com)

