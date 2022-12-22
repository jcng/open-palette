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
            model: "text-davinci-002",
            prompt: `Suggest three hex codes for a ${inputData} aesthetic in this format:
            [Hex code 1, Hex code 2, Hex code 3]`,
            temperature: 0.3
        });

        console.log(completion.data.choices)
        return { result: completion.data.choices[0].text };

        // return {result: "yes"}
    }
}