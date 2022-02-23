import { Advice } from "./advice";
import { _id } from "./helpers";

const [advice_id,advice_text] = ['advice_id','advice'].map(v=>_id<HTMLSpanElement>(v)!)
const advice = new Advice(advice_id,advice_text);
_id<HTMLImageElement>('dice')?.addEventListener('click',_ => advice.refresh())
advice.refresh()
