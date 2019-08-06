import { CrudOperation } from './crud-operation-enum';
import { Category } from './category';

export interface CategoryDialogData {
    operation: CrudOperation;
    category: Category;
}
