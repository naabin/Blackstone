export class Catering {
    id: number;
    minimumNo: number;
    name: string;
    description: string;
    pricePerPerson: number;
    tags: Tag[];
    createdOn: Date;
}

export class Tag {
    id: number;
    name: string;
}
