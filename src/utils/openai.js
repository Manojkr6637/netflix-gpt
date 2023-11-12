import OpenAI from 'openai'
import { OPENAP_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPENAP_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;