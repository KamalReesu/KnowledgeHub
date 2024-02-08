export interface Question{
    _id:number;
    type:string;
    question:string;
    answer:number|string|number[]|boolean;
    choice:Choice[];
    flag:boolean;
}

export interface Choice{
    _id:number;
    choice:string
}