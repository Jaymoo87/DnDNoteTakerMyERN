import React from "react";

interface HomeProps {}

const intro = `Hail, fellow adventurers! As a storyteller in the frigid land of Icewind Dale, I have long relied on quill and
parchment to record the tales of the brave souls who venture into the harsh wilderness. This Enchanted Tome 
is imbued with ancient magic, allowing it to record our adventures and keep track of our progress with ease. Its
pages are enchanted to never tear or smudge, and its ink never fades, ensuring that our tales will be preserved
for generations to come. And best of all, its magic wards off the influence of the Frost Maiden, keeping our
notes safe from her icy grasp. 

This enchantment allows us to record our adventures with ease, without the need for bulky tomes 
or cumbersome inkwells. You can easily capture the twists and turns of our tales, jot down the names of our
allies and enemies, and keep track of valuable treasures and hard-won experience points. 

But beware, my friends, for Icewind Dale is a treacherous place, and even the most seasoned adventurers can 
fall prey to the cruel machinations of the Frost Maiden. Her icy grip is felt throughout the land, and her minions 
lurk in every shadow. So I implore you, use this app with caution, lest it fall into the wrong hands and aid our 
enemies in their dark schemes. May the gods of Icewind Dale watch over us all, and guide us safely through the 
perils that lie ahead. And may this Tome prove a valuable tool in our quest for glory and honor.`;

const Home = (props: HomeProps) => {
  return (
    <div className="grid h-full grid-cols-1 m-1 ">
      <div className="flex mx-10 h-2/5 rounded-full justify-center bg-center bg-cover bg-no-repeat bg-[url(../../../pictures/homepage.jpg)]"></div>
      <textarea
        name="body"
        readOnly
        value={intro}
        className=" notefont text-accent text-center w-full mb-5 m-1 p-3 mx-auto rounded-md shadow-md bg-[url(../../../pictures/greyParchment.jpg)] "
      ></textarea>
    </div>
  );
};

export default Home;
