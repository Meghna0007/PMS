export class Todo{
    
    title!: string
    desc!: string
    size!: string
    active!: boolean

    constructor(title: string,desc: string,size: string){

        this.title=title;
        this.desc=desc;
        this.size=size;
        
    }
    
}