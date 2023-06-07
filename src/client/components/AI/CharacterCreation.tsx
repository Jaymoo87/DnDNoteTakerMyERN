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

  const [role, setRole] = useState<string>('A dungeon master that loves origin stories.');
  const [content, setContent] = useState<string>('');

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm xl:prose-2xl focus:outline-none w-full max-w-full shadow-md shadow-lg p-4 rounded-md notefont',
      },
    },
  });

  if (!editor) return null;
  const postAiContent = async () => {
    editor.chain().focus().setContent('Generating Your Life. Wait a Moment...').run();

    const response = await fetch(`https://dndnotes.fly.dev/api/gpt`, {
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
    <div className="flex flex-col items-center ">
      <form
        id="character"
        action="submit"
        className="grid lg:w-1/2 sm:m-1 lg:m-0 p-10 justify-items-center rounded-xl bg-[url(../../../pictures/originBackground.png)] bg-center bg-no-repeat bg-cover "
      >
        <div className="grid w-4/5 grid-cols-1 grid-rows-1 p-2 m-3 rounded-lg ">
          <label htmlFor="name" className="mx-3 font-bold namefont ">
            Name
          </label>
          <input
            autoComplete="name"
            value={newCharacterName}
            className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl "
            onChange={(e) => setNewCharacterName(e.target.value)}
            placeholder="Name"
            id="name"
          />
          <label className="mx-3 font-bold namefont " htmlFor="age">
            Age
          </label>
          <input
            autoComplete="age"
            value={age}
            className="p-1 mx-2 mb-4 text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Age"
            id="age"
          />
          <label className="mx-3 font-bold namefont " htmlFor="race">
            Race
          </label>
          <select
            value={race}
            onChange={(e) => setRace(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg scroll focus:outline-stone-200 hover:shadow-xl"
            id="race"
          >
            <option key="race" value="0">
              Select a Race
            </option>
            {raceOptions &&
              raceOptions.map((r) => (
                <>
                  <option key={`race-key-${r.value}`}>{r.label}</option>
                </>
              ))}
          </select>
          <label htmlFor="class" className="mx-3 font-bold text-blue-300 namefont ">
            Class
          </label>
          <select
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            id="class"
          >
            <option key="class" value="0">
              Select a Class
            </option>
            {classOptions &&
              classOptions.map((c) => (
                <>
                  <option key={`class-key-${c.value}`}>{c.label}</option>
                </>
              ))}
          </select>
          <label htmlFor="homeland" className="mx-3 font-bold namefont ">
            Homeland
          </label>
          <select
            value={homeland}
            onChange={(e) => setHomeland(e.target.value)}
            className="p-1 mx-2 mb-4 font-bold text-black rounded-lg focus:outline-stone-200 hover:shadow-xl"
            id="homeland"
          >
            <option key="selectHomeland" value="0">
              Select a Homeland
            </option>
            {homelandOptions &&
              homelandOptions.map((h) => (
                <>
                  <option key={`homeland-key-${h.value}`}>{h.label}</option>
                </>
              ))}
          </select>
        </div>
      </form>
      <div className="flex flex-col w-full p-3 m-4 rounded-md bg-opacity-70 sm:w-3/4 lg:w-1/2 sm:flex-col bg-slate-600">
        <h4 className="flex justify-center p-0 m-0 mb-2 ">Hi! Adjust My Attitude If You Need To</h4>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <input
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className="w-full px-3 py-1 text-center text-black border-2 rounded-lg inputfont focus:outline-none"
          />
          <small className="flex justify-center">(tell the origin story creator how you would like it to act)</small>
          <h1 className="inputfont">Summon The Storyteller</h1>
          <button type="button" onClick={postAiContent}>
            <GiMagicSwirl className="w-8 h-8 text-blue-800 hover:text-blue-300 " />
          </button>
        </div>
        <span className="flex justify-center p-0 mt-3 text-sm">
          powered by
          <Link to="https://openai.com/">
            <SiOpenai className="mx-2 mt-1" />
          </Link>
        </span>
      </div>
      <div className="flex justify-center rounded-lg w-full sm:w-1/2 lg:w-3/5 bg-[url(../../../pictures/greyParchment.png)]">
        <div className="rounded-lg lg:w-3/4 sm:w-full lg:p-5 sm:p-1 ">
          {content && (
            <>
              <EditorMenuBar editor={editor} />
              <hr className="mt-2 mb-5 border-1" />
            </>
          )}

          <EditorContent editor={editor} className="" />
        </div>
      </div>
      {!content && (
        <p className="flex justify-center p-2 mt-5 font-bold text-red-600 bg-red-200 rounded-lg ">{contentError}</p>
      )}
    </div>
  );
};

export default CharacterCreation;
