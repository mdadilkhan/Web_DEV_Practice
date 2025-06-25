export function add(a:number,b:number):number{
  return a+b
}


export function getErrorMessage(error: unknown):string {
  console.log("inside getErrorMessage",error);
  
  if(error instanceof Error){
     return error.message;
  }
  if(error && typeof error === 'object' && 'message' in error){
    return String(error.message)
  }
  if(typeof error==='string'){
    return error
  }
 return "An error occured"
}
