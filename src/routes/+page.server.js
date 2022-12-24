import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const inputData = data.get('input');


        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Three hexcode colors for a \"${inputData}\" aesthetic:`,
            temperature: 0.7,
            max_tokens: 27,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

        console.log(completion.data.choices)
        return {
            result: completion.data.choices[0].text,
            input: inputData
        };

        // return {result: "yes"}
    }
}