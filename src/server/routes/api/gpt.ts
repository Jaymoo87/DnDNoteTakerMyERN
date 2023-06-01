import express, { Request, Router } from 'express';

import config from '../../config';

const gptRouter = Router();

import { AxiosResponse } from 'axios';

import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: config.openAI.API_KEY,
});

gptRouter.post('/', async (req: Request, res: any) => {
  try {
    const openai = new OpenAIApi(configuration);

    if (req.method === 'POST') {
      // Handle the POST request

      ///  add different variables for character stats and other information to send to chatgpt request. ex: {var1, var2, role}
      const { role, newCharacterName, characterClass, age, race, homeland } = await req.body;
      const aiRes: AxiosResponse<CreateChatCompletionResponse, any> = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Create a 1750 word dungeons and dragons character origin story in paragraphs for:  ${newCharacterName}, a ${age} year old ${race} ${characterClass} from ${homeland} who is about to start a new adventure. `,
            // content: 'just simple hello for testing api',
          },
          {
            role: 'system',
            content: `${role || 'I am proficient at creating origin stories'}. Write with html tags`,
          },
        ],
      });
      return res.status(200).json({
        content: aiRes.data.choices[0].message?.content,
      });
    }
  } catch (error) {
    console.error('req error', error);
    return res.status(500).json({ error: 'post did not update' });
  }
});

export default gptRouter;
