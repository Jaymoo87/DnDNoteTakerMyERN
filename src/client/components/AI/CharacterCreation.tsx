import React, { useState } from 'react';

import { characterOptions } from '../../../../data/Data';

type Props = {};

interface Character {
  characterName: string;
  age: number;
  race: string;
  characterClass: string;
  homeland: string;
}

const CharacterCreation = (props: Props) => {
  const [newCharacterName, setNewCharacterName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [race, setRace] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');
  const [homeland, setHomeland] = useState<string>('');

  const { raceOptions, classOptions, homelandOptions } = characterOptions;

  return (
    <div className="flex justify-center ">
      <form
        action="submit"
        className="grid justify-items-center bg-center bg-cover  bg-no-repeat bg-[url(../public/assets/formbackground.png)] p-10 rounded-xl w-1/2 "
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
              raceOptions.map((r) => (
                <>
                  <option key={`race-key-${r.value}`}>{r.label}</option>
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
              classOptions.map((c) => (
                <>
                  <option key={`class-key-${c.value}`}>{c.label}</option>
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
              homelandOptions.map((h) => (
                <>
                  <option key={`homland-key-${h.value}`}>{h.label}</option>
                </>
              ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default CharacterCreation;
