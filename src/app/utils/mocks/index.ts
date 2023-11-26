import { StatusType, SubmissionsType } from '../../models';

export const MOCK_DATA: SubmissionsType[] = [
  {
    description: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '12/12/2023',
    status: StatusType.UNCOMPLETE,
    lat: 23.435,
    lng: 89.234,
  },
  {
    description: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '18/12/2023',
    status: StatusType.LOW_RISK,
    lat: 32.234,
    lng: 87.34,
  },
  {
    description: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '22/12/2023',
    status: StatusType.NEEDS_REVIEW,
    lat: 311.234,
    lng: 85.234,
  },
  {
    description: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '24/12/2023',
    status: StatusType.LOW_RISK,
    lat: 21.7567,
    lng: 87.432,
  },
  {
    description: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '25/12/2023',
    status: StatusType.UNCOMPLETE,
    lat: 22.567,
    lng: 86.765,
  },
];
