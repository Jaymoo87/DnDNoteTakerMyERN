import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { characterOptions } from '../../../../data/Data';
import { FaRocket } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { GiMagicSwirl } from 'react-icons/gi';

import EditorMenuBar from './EditorMenuBar';

type Props = {};

const CharacterCreation = ({}: Props) => {
  const [contentError, setContentError] = useState<string>('no story to display');
  const [newCharacterName, setNewCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const [role, setRole] = useState<string>('I am a dungeon master that loves origin stories.');
  const [content, setContent] = useState<string>('');

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm xl:prose-2xl focus:outline-none w-full max-w-full shadow-md shadow-lg p-4 rounded-md',
      },
    },
  });

  if (!editor) return null;
  const postAiContent = async () => {
    editor.chain().focus().setContent('Generating Your Life. Wait a Moment...').run();

    const response = await fetch(`/api/gpt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newCharacterName,
        age,
        race,
        characterClass,
        homeland,
        role,
        content,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  return (
    <div className="flex flex-col items-center">
      <form
        action="submit"
        className="grid w-1/2 p-10 bg-gray-400 bg-center bg-no-repeat bg-cover justify-items-center rounded-xl "
      >
        <div className="grid w-4/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
          <label htmlFor="name" className="mx-3 font-bold ">
            Name
          </label>
          <input
            value={newCharacterName}
            className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl "
            onChange={(e) => setNewCharacterName(e.target.value)}
            placeholder="Name"
            id="name"
          />

          <label className="mx-3 font-bold " htmlFor="age">
            Age
          </label>
          <input
            value={age}
            className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Age"
            id="age"
          />

          <label className="mx-3 font-bold " htmlFor="race">
            Race
          </label>
          <select
            value={race}
            onChange={(e) => setRace(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg scroll focus:outline-stone-200 hover:shadow-xl"
          >
            <option value="0">Select a Race</option>
            {raceOptions &&
              raceOptions.map((r, i) => (
                <>
                  <option key={`race-key-${i}`}>{r.label}</option>
                </>
              ))}
          </select>

          <label className="mx-3 font-bold ">Class</label>
          <select
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
          >
            <option value="0">Select a Class</option>
            {classOptions &&
              classOptions.map((c, index) => (
                <>
                  <option key={`class-key-${index}`}>{c.label}</option>
                </>
              ))}
          </select>

          <label className="mx-3 font-bold "> Homeland </label>
          <select
            value={homeland}
            onChange={(e) => setHomeland(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
          >
            <option value="0">Select a Homeland</option>
            {homelandOptions &&
              homelandOptions.map((h, i) => (
                <>
                  <option key={`homland-key-${i}`}>{h.label}</option>
                </>
              ))}
          </select>
        </div>
      </form>
      <div className="w-1/4 p-3 mb-3 rounded-md ">
        <h4 className="flex justify-center p-0 m-0 mb-2">Hi! Adjust My Attitude If You Need To</h4>
        <small className="flex justify-center">(tell the origin story creator how you would like it to act)</small>
        <div className="flex justify-center gap-5">
          <input
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className="w-full px-3 py-1 text-center text-black border-2 "
          />
          <button type="button" onClick={postAiContent}>
            <GiMagicSwirl className="w-8 h-8 hover:text-blue-300" />
          </button>
        </div>
        <span className="flex justify-center p-0 mt-3 text-sm">
          powered by{' '}
          <Link to="https://openai.com/">
            {' '}
            <SiOpenai className="mx-2 mt-1" />
          </Link>
        </span>
      </div>
      <div className="flex justify-center w-3/5 bg-[url(../../../pictures/greyParchment.png)]">
        <div className="w-3/4 p-5 rounded-lg ">
          {content && (
            <>
              <EditorMenuBar editor={editor} />
              <hr className="mt-2 mb-5 border-1" />
            </>
          )}

          <EditorContent editor={editor} className="text-blue-300 " />
        </div>
      </div>
      {!content && <p className="flex justify-center mt-5 font-bold text-red text-wh-900 ">{contentError}</p>}
    </div>
  );
};

export default CharacterCreation;
