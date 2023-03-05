import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
	return (
		<div class="frappe">
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer">
					Learn Solid
				</a>
				<h1 class="text-3xl font-bold underline">AH AH</h1>{' '}
				<h1 class=" text-ctp-pink">Hello world!</h1>
			</header>
		</div>
	);
};

export default App;
