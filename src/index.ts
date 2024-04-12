// let num = 30;
// if (num < 50)
//     ++num;
// console.log(num);

// function domm(doc: number) {
//     return doc;
// }
// domm(5);

// ---------------  enum  ----------------


/*   //  functions 

}
console.log(tax(2024,45));

*/

// objects 

const enum Size { small, medium, large };
let  postSize:Size = Size.large;
console.log(postSize);   // :- 2


type RequestState =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success', data: any }
    | { status: 'error', error: Error };

type Status = "idle" | "loading" | "success" | "error";

function tax(year = 2022, tax: number): number {
    if (year < 2023) return year * tax * 1.3;
    return year * tax * 1.7;
}
