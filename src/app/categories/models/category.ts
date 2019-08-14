import { Subcategory } from 'src/app/subcategories/models/subcategory';

export class Category {
    id: string;
    name: string;
    subcategories: Subcategory[];

    constructor(id: string, name: string, subcategories?: Subcategory[]) {
        this.id = id;
        this.name = name;
        this.subcategories = subcategories;
    }
}
