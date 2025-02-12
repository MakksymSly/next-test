import { FiltersType } from "@/types/Filters";

export const filters = [
  {
    value: FiltersType.ALL,
    title: 'All',
  },
  {
    value: FiltersType.ACTIVE,
    title: 'Active',
  },
  {
    value: FiltersType.COMPLETED,
    title: 'Completed',
  },
];