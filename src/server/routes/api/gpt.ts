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
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const openai = new OpenAIApi(configuration);

    if (req.method === 'POST') {
      // Handle the POST request

      ///  add different variables for character stats and other information to send to chatgpt request. ex: {var1, var2, role}
      const { role, newCharacterName, characterClass, age, race, homeland } = await req.body;
      const aiRes: AxiosResponse<CreateChatCompletionResponse, any> = await openai.createChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Create a 2000 word dungeons and dragons character origin story in paragraphs for:  ${newCharacterName}, a ${age} year old ${race} ${characterClass} from ${homeland}. `,
              // content: 'just simple hello for testing api',
            },
            {
              role: 'system',
              content: `${role || 'I am proficient at creating origin stories'}. Write with html tags`,
            },
          ],
        }
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        //     'Access-Control-Allow-Origin': '*',
        //   },
        // }
      );
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
