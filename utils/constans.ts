export const MenuItems = [
	{
		title: 'Quản lý người dùng',
		to: '/',
		icon: 'mdi-account-multiple'
	},
	{
		title: 'Cấu hình',
		to: '/setting',
		icon: 'mdi-wrench'
	}
]

export type MenuItem = {
	title: string;
	to: string;
	icon: string;
}