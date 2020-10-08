export const MenuItems = [
	{
		title: 'Reward list',
		to: '/',
		icon: ''
	},
	{
		title: 'History list',
		to: '/history',
		icon: ''
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
	{ text: "User name", value: "username" },
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