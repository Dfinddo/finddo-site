import { Subcategory } from './subcategory';
import { CrudOperation } from 'src/app/categories/models/crud-operation-enum';

export interface SubcategoryDialogData {
    operation: CrudOperation;
    subcategory: Subcategory;
}
