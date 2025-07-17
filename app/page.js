// External Modules
import Link from 'next/link';

// Internal Modules
import ImageSlideshow from '@/components/images/image-slideshow';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.slideshow}>
					<ImageSlideshow />
				</div>
				<div>
					<div className={styles.hero}>
						<h1>Share Your Food Recipes for NextLevel Foodies</h1>
						<p>Taste & share food from all over the world</p>
					</div>
					<div className={styles.cta}>
						<Link href='/community'>Join the Community</Link>
						<Link href='/meals'>Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={styles.section}>
					<h2>How it works</h2>
					<p>
					Share Your Food Recipes is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
					Share Your Food Recipes is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>
				<section className={styles.section}>
					<h2>Why Share Your Food Recipes?</h2>
					<p>
					Share Your Food Recipes is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
					Share Your Food Recipes is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>
			</main>
		</>
	);
}
