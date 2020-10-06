export type TabItem = {
  id: string;
  title: string;
  component: string;
}

// Customer
export const CustomerTabItems: TabItem[] = [
  { id: 'customer-list', title: 'Danh sách', component: 'CustomerList' },
  { id: 'edit-customer', title: 'Chỉnh sửa', component: 'EditCustomer' },
]

export default {
  CustomerTabItems
}