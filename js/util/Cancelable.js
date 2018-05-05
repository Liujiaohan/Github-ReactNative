
export default function makeCancelable(promise){
    let hasCanceled=false;
    const wrappedPromise=new Promise((resolve,reject)=>{
        promise.then((val)=>
            hasCanceled? reject({isCancel:true}):resolve(val));
        promise.catch((error)=>
            hasCanceled? reject({isCancel:true}):reject(error));
    });

    return {
        promise:wrappedPromise,
        cancel(){
            hasCanceled=true;
        }
    };
}