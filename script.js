class linkedList{
    constructor(){
        this.list={};
        }
    #findTail(){
        let next= this.list;
        while(next.nextNode.nextNode != null){
            next=next.nextNode;
        }
        return next
    }
    append(value){
        if (Object.keys(this.list).length==0){
            this.prepend(value);
        }else{
            let tail= this.#findTail();
            tail.nextNode= new Node(value,{});
        }
    }
    prepend(value){
        this.list = new Node(value,this.list);
    }
    size(){
        let count=0;
        let next = this.list;
        while (next.nextNode != null){
            next= next.nextNode;
            count++;
        }
        return count;
    }
    head(){
        return this.list.value;
    }
    tail(){
        return this.#findTail().value;
    }
    at(index){
        if(index==0){
            return history.head();
        }
        if(index == this.size()-1){
            return this.tail();
        }
        let next= this.list.nextNode;
        if(next == null){
            return notdifined;
        }
        let count=1;
        while(next.nextNode!=null){
            if (count ==index)return next.value;
            count++;
            next= next.nextNode;
        }
        return next.value;
    }
    pip(){
        if (this.list.value==null)return undefined;
        this.list= this.list.nextNode;
        return this.list
    }
    contains(value){
        for(leti=0;i<this.size(); i++){
            if (value == this.at(i)) return true
        }
    return false;
    }
    findIndex(value){
        for(let i=0;i<this.size(); i++){
            if(value == this.at(i)) return i;
        }
        return -1;
    }
    tostring(){
        let str='';
        for (let i=0; i<this.size();i++){
            str += '(${this.at(i)}) ->';
        }
        str += 'null';
        return str;
    }
}
class Node{
    constructor(value, nextNode){
        this.valuevalue;
        this.nextNode= nextNode;
   }
}
export {linkedList};