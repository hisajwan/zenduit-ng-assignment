import { NavItemsList } from '../../models';

export const NAVIGATION_LIST: NavItemsList[] = [
  {
    id: 'forms',
    label: 'Forms',
    path: '/forms',
    icon: 'list2',
    isActive: false,
  },
  {
    id: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: 'group',
    isActive: false,
  },
  {
    id: 'submissions',
    label: 'Submissions',
    path: '/submissions',
    icon: 'graphic_eq',
    isActive: false,
  },
  {
    id: 'history',
    label: 'History',
    path: '/history',
    icon: 'history',
    isActive: false,
  },
  {
    id: 'reports',
    label: 'Reports',
    path: '/reports',
    icon: 'insert_chart_outlined',
    isActive: false,
  },
  {
    id: 'workflow',
    label: 'Workflow',
    path: '/workflow',
    icon: 'insert_chart_outlined',
    isActive: false,
  },
];
