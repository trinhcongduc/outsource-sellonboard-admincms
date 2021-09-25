import DetailCustomer from "./pages/detail";
import CreateCustomer from "./pages/new";
import ListCustomer from "./pages/list";

export const CustomerRoute = [
  {
    path: '/customer/new',
    component: CreateCustomer
  },
  {
    path: 'customer/:id',
    component: DetailCustomer
  },
  {
    path: 'customers',
    component: ListCustomer
  }
]
