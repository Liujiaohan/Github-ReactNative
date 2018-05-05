

export default class ArrayUtils{
    /**
     * 更新数组,存在则删除不存在则添加
     */
    static updateArray(array,item){
        for (var i=0,len =array.length;i<len;i++){
            var temp=array[i];
            if (temp===temp){
                array.splice(i,1);
                return;
            }
        }
        array.push(item);
    }

    /**
     * 添加元素
     */
    static add(array,item){
        if(!array) return;
        for(var i=0,l=array.length;i<l;i++){
            if (item===array[i]) return;
        }
        array.push(item);
    }

    /**
     * 移除元素
     */
    static remove(array,item){
        for (var i=0,len =array.length;i<len;i++){
            var temp=array[i];
            if (temp===temp){
                array.splice(i,1);
                return;
            }
        }
    }

    /**
     * clone数组 
     */
    static clone(from){
        if(!form) return [];
        let newArray=[];
        for (let i=0,length=from.length;i<length;i++){
            newArray[i]=from[i];
        }
        return newArray;
    }

    /**
     * 判断两个数组是否相等
     */

     static isEqual(array1,array2){
         if(!(array1&&array2)) return false;
         if (array1.length!=array2.length) return false;
         for (let i=0,length=array1.length;i<length;i++){
             if (array1[i]!=array2[i]) return false;
         }
         return true;
     }
}