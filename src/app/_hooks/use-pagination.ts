import { useContext } from 'react';
import { PaginationContext } from '@app/_providers/context';

export function usePage() {
  const context = useContext(PaginationContext);

  if (!context)
    throw new Error('usePagination must be used within a PaginationProvider');

  return context;
}
