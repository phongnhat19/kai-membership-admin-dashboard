export const MenuItems = [
	{
		title: 'Reward list',
		to: '/',
		icon: 'mdi-gift-outline'
	},
	{
		title: 'Reward history',
		to: '/history',
		icon: 'mdi-cash-usd-outline'
	},
	// {
	// 	title: 'Setting',
	// 	to: '/setting', 
	// 	icon: 'mdi-wrench'
	// }
]

export type MenuItem = {
	title: string;
	to: string;
	icon: string;
}

export const HISTORY_TX_LIST_HEADERS = [
	{ text: "Username", value: "username" },
	{ text: "Full name", value: "fullName" },
	{ text: "Phone", value: "phone" },
	{ text: "Email", value: "email" },
	{ text: "Reward name", value: "rewardName" },
	{ text: "Status", value: "status" },
	{ text: 'Actions', value: 'actions', sortable: false },
];

export const REWARD_LIST_HEADERS = [
	{ text: "Title", value: "title" },
	{ text: "Description", value: "description" },
	{ text: "Quantity", value: "quantity" },
	{ text: "Percentage", value: "percentage" },
	{ text: "Image", value: "image" },
	{ text: "Active", value: "active" },
];

export const DEFAULT_STRATEGY = 'local'