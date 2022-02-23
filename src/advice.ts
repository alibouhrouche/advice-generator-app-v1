type Slip = {
    id: number,
    advice: string
}
type Message = {
    type: string,
    text: string
}
type Data = {
    slip?: Slip,
    message?: Message
}
export class Advice {
    #idout: HTMLSpanElement
    #out: HTMLSpanElement
    constructor(id:HTMLSpanElement,out: HTMLSpanElement) {
        this.#idout = id
        this.#out = out
    }
    static async fetch():Promise<[number, string]>{
        const req = await fetch('https://api.adviceslip.com/advice');
        const data:Data = await req.json();
        if(data.slip == undefined){
            throw data.message ?? "Error"
        }
        const slip = data.slip;
        return [slip.id,slip.advice]
    }
    render([id,advice]:[number,string]){
        this.#idout.textContent = String(id)
        this.#out.textContent = advice
    }
    async refresh(){
        try {
            this.render(await Advice.fetch())
        } catch (error:any) {
            this.render([0,"Error"])
        }
    }
}