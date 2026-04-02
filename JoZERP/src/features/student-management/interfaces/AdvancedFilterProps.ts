import { FilterState } from './FilterState';

export interface AdvancedFilterProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onApply: (filters: FilterState) => void;
  onClear: () => void;
  anchorEl: HTMLElement | null;
}