<script>

 // Color Backgrounds
 export let bgColor;

 // Gradient Backgrounds
 export let bgGradient;
 // Image Backgrounds
 export let bgImage;
 export let bgSize;
 export let bgPosition;
 export let bgRepeat;
 export let bgOpacity;
 // Video Backgrounds
 export let bgVideo;
 export let bgVideoLoop;
 export let bgVideoMuted;
 // Iframe Backgrounds
 export let bgIframe;
 export let bgInteractive;
 // Transitions
</script>
<section
		data-background-color={bgColor}
													data-background-gradient={bgGradient}
		data-background-image={bgImage}
													data-background-size={bgSize}
													data-background-position={bgPosition}
													data-background-repeat={bgRepeat}
		data-background-opacity={bgOpacity}
													data-background-video={bgVideo}
		data-background-video-loop={bgVideoLoop}
		data-background-video-muted={bgVideoMuted}
		data-background-iframe={bgIframe}
		data-background-interactive={bgInteractive}
>
		<slot/>
</section>
