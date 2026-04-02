import { ColumnDef } from "@tanstack/react-table";

export interface GenericTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];

  currentPage: number;
  totalPages: number;
  cachedPages: Record<number, T[]>;

  onNext: () => void;
  onPrevious: () => void;
  onPageChange: (pageIndex: number) => void;

  pageSize?: number;
  onPageSizeChange?: (size: number) => void;

  actions?: {
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    onPrint?: (row: T) => void;
    onSend?: (row: T) => void;
    onSave?: (row: T) => void;
  };

  /* NEW: SELECTION FEATURE */
  selection?: {
    selectedRowIds: string[];
    getRowId: (row: T) => string;
    onChange: (ids: string[]) => void;
  };

  height?: string | number;
  enableSorting?:boolean;
}