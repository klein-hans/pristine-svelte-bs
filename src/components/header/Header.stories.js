import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
import './Header.svelte';

export default {
	title: 'Example/Header',
	component: Header,
	argTypes: {
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}
};

export const Primary = () => ({
	Component: Header,
	props: {
		user: 'John'
	}
});
