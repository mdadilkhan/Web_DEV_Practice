class CustomError<C extends string> extends Error {
  statusCode: number;
  code?: C;


  // this is not direct sendign variable to constructor its a destructure way to pass 
  // user can send only object which this valye without knowing the order and here code will destructure required
  constructor({message,statusCode,code}:{message:string; statusCode:number; code:C}){
    super(message)
    this.statusCode=statusCode,
    this.code=code
  }
}




export default CustomError