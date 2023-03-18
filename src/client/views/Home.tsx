import React from "react";
import { Toast } from "../components";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className=" container mx-auto m-5  w-[35%] h-[100%]   ">
      <div>
        <p className="p-20 text-center text-black dndfont bg-[url(../pictures/parchment.png)] bg-center bg-cover bg-scroll bg-no-repeat">
          <span className="flex justify-center font-serif font-extrabold text-black">Greetings, noble adventurer!</span>
          <br />
          As the chronicler of tales in this realm, I am pleased to share with thee a most useful tool for thy Dungeons
          and Dragons journey. In the days of yore, we would record our tales with quill and parchment, but now, in this
          modern age, we have a wondrous tool that will aid thee in thy note-taking endeavors. This tool will allow thee
          to sign in and create notes of thy character's lineage, quest objectives, and crucial events that thou
          encounters. Thou canst read, update, and even delete these notes as thou sees fit, all while journeying
          through this mystical land. With this tool, thou shalt never lose thy way nor forget the deeds that have
          brought thee to this place. As a storyteller, I know the importance of capturing every detail of thy
          adventures, and this tool will be thy boon companion. Its interface is simple and easy to navigate, and it
          syncs seamlessly across all thy devices. Thus, thou canst focus on the game, and let this tool take care of
          thy notes. So go forth, adventurer, and make use of this wondrous tool. Let it be thy trusty companion on thy
          journey and may it serve thee well in thy future endeavors.
        </p>
      </div>
    </div>
  );
};

export default Home;
