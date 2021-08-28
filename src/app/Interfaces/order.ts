export interface Order{
    id:any,
    userId:any,
    username:any,
    items: {category:string,itemId:string,name:string,size:string,color:string,quantity:number,price:number,imageUrl:string}[],
    shippingInfo: {city:string,apart:string,phone:number,street:string},
    date: string
    totalprice: number,
    city: string,
    
}