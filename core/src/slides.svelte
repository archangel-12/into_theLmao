<script lang="ts">
	import { Presentation } from '@components';
	import { startLoop } from './pipe/rememBer';

	import { onMount } from 'svelte';
	onMount(() => {
		startLoop();
	});
</script>

<Presentation>
	<div class="reveal">
		<div class="slides">
			<section>
				<section data-background-image="https://media1.tenor.com/m/fQAv9LMYVOIAAAAd/caseoh-caseoh-games.gif">
					<h1 style="font-size: 3rem; text-transform: none; color: white;">
						Perpaduan cara berpikir Diakronik dan Sinkronik dalam Sejarah
					</h1>
				</section>
				<section data-background-image="https://media1.tenor.com/m/yKNWg88Y1W4AAAAC/eric-andre-let-me.gif" />
				<section data-background-iframe="https://en.wikipedia.org/wiki/30_September_Movement" data-background-interactive />
				<section>
					<h1 style="font-size: 3rem; text-transform: none; color: white;">
						Diakronik mementingkan terjadinya suatu peristiwa sedangkan sinkronik mementingkan struktur dalam peristiwa
					</h1>
				</section>
			</section>
		</div>

		<div class="slides">
			<section>
				<section data-background-image="https://media1.tenor.com/m/I2t5X5BT9CoAAAAd/caseoh-case-oh.gif">
					<h1 style="font-size: 3rem; text-transform: none; color: white;">
              			Hubungan sebab akibat (kausalitas), perubahan, & keberlanjutan
            		</h1>
				</section>
				<section data-background-image="https://www.vice.com/wp-content/uploads/sites/2/2017/09/1506753584399-WhatsApp-Image-2017-09-29-at-42942-PM.jpeg?resize=1024,564" />
				<section data-background-image="https://www.vice.com/wp-content/uploads/sites/2/2017/09/1506753584399-WhatsApp-Image-2017-09-29-at-42942-PM.jpeg?resize=1024,564">
					<h2 style="font-size: 3rem; text-transform: none; color: white;">
					  ada yang tahu mereka-mereka ini siapa? :(
					</h2>
				</section>
			</section>
		</div>

		<div class="slides">
			<section>
				<section data-background-image="https://media1.tenor.com/m/Hbfi8voUJ4EAAAAC/bh187-spongebob.gif">
					<h1 style="font-size: 3rem; text-transform: none; color: black;">
						Manfaat belajar sejarah
					</h1>
				</section>
				<section data-background-image="https://studio.mrngroup.co/storage/app/media/Prambors/Editorial%204/ramai-peringatan-darurat-logo-garuda-pancasila-dengan-latar-biru-di-sosial-media-ada-apa-20240821172811.webp?tr=w-800" />
			</section>
		</div>

		<div class="slides">
			<section id="supers" />
		</div>
	</div>
</Presentation>