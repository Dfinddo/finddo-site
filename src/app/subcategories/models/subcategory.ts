import { Category } from 'src/app/categories/models/category';

export class Subcategory {
    name: string;
    id: string;
    category: Category;

    constructor(name: string, id: string, category?: Category) {
        this.name = name;
        this.id = id;
        this.category = category;
    }
}
