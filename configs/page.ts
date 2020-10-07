export type TabItem = {
  id: string;
  title: string;
  component: string;
}

// Customer
export const CustomerTabItems: TabItem[] = [
  { id: 'customer-list', title: 'List', component: 'CustomerList' },
  { id: 'edit-customer', title: 'Edit', component: 'EditCustomer' },
]

// Customer
export const HistoryTxTabItems: TabItem[] = [
  { id: 'history-list', title: 'List', component: 'HistoryTxList' }
]

export default {
  CustomerTabItems
}