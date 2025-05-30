import React, { useEffect } from "react";
import { useState } from "react";
import '../css/members.css';
// image
import Pic1 from "../assets/pain.png";
import Pic2 from "../assets/dara.png";
import Pic3 from "../assets/angle.png";
import Pic4 from "../assets/itachi.png";
import Pic5 from "../assets/black.png";
import Pic6 from "../assets/sasori.png";
import Pic7 from "../assets/immortal.png";
import Pic8 from "../assets/kakuzu.png";
import Pic9 from "../assets/tail-less.png";
import Pic10 from "../assets/snake.png";
// min er
import Min1 from "../assets/min1.png";
import Min2 from "../assets/min2.png";
import Min3 from "../assets/min3.png";
import Min4 from "../assets/min5.png";
import Min5 from "../assets/min4.png";
import Min6 from "../assets/min6.png";
import Min7 from "../assets/min7.png";
import Min8 from "../assets/min8.png";
import Min9 from "../assets/min9.png";
import Min10 from "../assets/min10.png";

export default function Members() {
  const member = [
    {
      nam: "pain", pic: Pic1, place: "right thumb zero", box: "1", minp: Min1,
      pg: "Tragic Childhood: Orphaned during the Second Shinobi World War after Konoha shinobi killed his parents; awakened the Rinnegan in grief.",
      pg2: " Found Family: Rescued by Yahiko and Konan; they dreamed of endingwar and trained under Jiraiya.",
      pg3: "Akatsuki’s Birth: Founded Akatsuki to promote peace; gained followers and influence across Amegakure.",
      pg4: " Yahiko’s Death: Yahiko died in an ambush by Hanzō and Danzō; Nagato was left crippled and emotionally broken.",
      pg5: "Becomes Pain: Adopted thename Pain, used Yahiko's body as the Deva Path, and believed peace could only come through shared suffering.",
      pg6: "Rule Over Amegakure:Killed Hanzō, took over Amegakure, and was worshipped as a god by the people."
    },
    {
      nam: "Deidara", pic: Pic2, place: "right index blue green", box: "2", minp: Min2,
      pg: " Former Iwagakure shinobi, part of the Explosion Corps with the Explosion Release kekkei genkai.",
      pg2:"Stole a forbidden jutsu to infuse chakra into clay, developing his signature explosive art.",
      pg3:"Became a missing-nin, working as a bomber for insurgents across nations.",
      pg4:"Recruited by Akatsuki after losing a battle to Itachi Uchiha, whom he came to despise.",
      pg5:"Partnered with Sasori and participated in key missions, including targeting Orochimaru.",
      pg6:"Trained to counter genjutsu and developed powerful techniques like C4 to surpass Itachi.Left Iwagakure in ruins by bombing it after his defection.",
     },
    { nam: "konan", pic: Pic3, place: "right midel white", box: "3", minp: Min3 ,
      pg:"Former Iwagakure ninja with the Explosion Release kekkei genkai.",
      pg2:"Stole a forbidden jutsu to infuse chakra into clay, creating explosive art.",
      pg3:"Became a missing-nin and worked as a bomber-for-hire.",
      pg4:"Forced to join Akatsuki after losing to Itachi Uchiha.",
      pg5:"Developed techniques like C4 to surpass Itachi and counter genjutsu.",
      pg6:"Developed techniques like C4 to surpass Itachi and counter genjutsu.",
    },
    { nam: "itachi", pic: Pic4, place: "right ring scarlet", box: "4", minp: Min4 ,
      pg:"Child Prodigy & Pacifist: Traumatized by war at age 4, Itachi sought peace and became an exceptional ninja early on.",
      pg2:"Academy & Early Growth: Graduated the Academy at 7, awakened Sharingan at 8, and became a Chūnin at 10.",
      pg3:"Anbu & Double Agent: Joined Anbu at 11, promoted to captain at 12; secretly became a double agent to prevent Uchiha clan's coup.",
      pg4:"Shisui’s Death & Mangekyō: Gained Mangekyō Sharingan after Shisui’s suicide;",
      pg5:"carried the burden of protecting the village.",
      pg6:"Uchiha Massacre: Killed his clan with Tobi (Obito) under Danzō's orders, sparing only Sasuke, whom he manipulated to",
    },
    { nam: "zetsu", pic: Pic5, place: "right pinky boar", box: "5", minp: Min5,
      pg:"Black Zetsu was created by Kaguya Ōtsutsuki to act as her will and ensure her revival after she was sealed by her sons, Hagoromo and Hamura.",
      pg2:"Black Zetsu manipulated Indra (Hagoromo's son) into starting conflict with his brother Asura, setting the stage for centuries of Uchiha vs. Senju rivalry.",
      pg3:"It altered the Sage of Six Paths' stone tablet to mislead the Uchiha clan",
      pg4:"falsely presenting the Infinite Tsukuyomi as a path to peace.",
      pg5:"Hid inside Madara’s body, letting him believe Black Zetsu was created from his will, and later helped orchestrate the events leading to Madara's resurrection.",
      pg6:"White Zetsu was a human transformed by the Infinite ",
     },
    { nam: "sasori", pic: Pic6, place: "left thumb sphere", box: "6", minp: Min6 ,
      pg:"Puppet Prodigy: Sasori, grandson of Chiyo from Sunagakure, was a genius puppeteer known for his deadly creations during the Third Shinobi World War, earning the title Sasori of the Red Sand.",
      pg2:"Third Kazekage's Killer: He secretly abducted and killed the",
      pg3:"Third Kazekage, the strongest in Suna’s history, and turned him into a human puppet.",
      pg4:"Defection: Sasori defected from Sunagakure around 20 years before the Fifth Kazekage's abduction, dealing a major blow to the village.",
      pg5:"Joins Akatsuki: After leaving Suna, Sasori joined Akatsuki,",
      pg6:"continuing his puppet-based killings and eventually turning himself into a puppet to avoid aging.Truth Revealed: The truth about the Third",
    },
    { nam: "hidan", pic: Pic7, place: "left index three", box: "7", minp: Min7,
      pg:"Early Signs of Violence: As a child in Yugakure, Hidan discovered fresh corpses in the Valley of Hell, leading to suspicions that he was involved in a massacre; the incident was later deemed the work of an entire clan.",
      pg2:"Yugakure's Decline and Rebellion: Disillusioned with Yugakure turning into a peaceful tourist spot, Hidan massacred his neighbors,",
      pg3:" believing shinobi were meant to kill, and left the village.",
      pg4:"Conversion to Jashinism: He joined the Jashin cult, ",
      pg5:"embracing its doctrine of destruction and slaughter, and gained immortality through the faith’s secret techniques.",
      pg6:"Joining Akatsuki: After his violent acts, Yugakure requested Akatsuki to eliminate him. Instead, after a fight",
     },
    { nam: "kakuzu", pic: Pic8, place: "left midel north", box: "8", minp: Min8,
      pg:"Mission Against Hashirama: As an elite ninja of Takigakure, Kakuzu was assigned to assassinate Hashirama Senju",
      pg2:"the First Hokage, but failed, earning punishment and disgrace upon returning home.",
      pg3:"Betrayal and Defection: Feeling wronged, Kakuzu escaped imprisonment, killed the village elders, stole their hearts, and fled with forbidden techniques, developing a deep hatred for Takigakure.",
      pg4:"Earth Grudge Fear and Bounty Hunting: Using his stolen technique, Earth Grudge Fear, Kakuzu extended his life by ripping ",
      pg5:"out the hearts of powerful shinobi and survived through black market bounty hunting.",
      pg6:"Joining Akatsuki: After being defeated by Pain, Kakuzu ",
     },
    { nam: "kisame", pic: Pic9, place: "left ring south", box: "9", minp: Min9,
      pg:"Loyal but Ruthless Shinobi: Kisame served under Fuguki Suikazan of the Seven Ninja Swordsmen of the Mist and killed the Cypher Division .",
      pg2:"to prevent Konoha from extracting information—showing loyalty to his village over comrades.",
      pg3:"Betrayal of Fuguki: After discovering Fuguki was a traitor selling intel to enemy villages, ",
      pg4:"Kisame killed him and took Samehada, beginning his descent into disillusionment and distrust.",
      pg5:"Recruitment by “Madara” (Obito): Kisame was approached by Obito (posing as Madara),",
      pg6:" who introduced him to the Eye of the Moon Plan; enticed by the idea of a world without lies, Kisame agreed to join him.", 
    },
    { nam: "orochimaru", pic: Pic10, place: "left pinky sky", box: "10", minp: Min10 ,
      pg:"Prodigy Turned Dark: Once a gifted student of Hiruzen Sarutobi and teammate of Jiraiya and Tsunade,",
      pg2:"Orochimaru became obsessed with immortality and forbidden knowledge after the loss of his parents.",
      pg3:"Wartime Hero & Sannin: Gained fame during the Second Shinobi World War and was titled one of the Legendary Sannin by Hanzō alongside Jiraiya and Tsunade.",
      pg4:"Secret Experiments: While working with Root under Danzō, he began kidnapping and experimenting .",
      pg5:"on shinobi to develop immortality techniques and reproduce powerful abilities like Hashirama’s Wood Release.",
      pg6:"Creation of Otogakure: After failing to become Hokage and being discovered by Hiruzen, Orochimaru defected from",
    },
  ]
  const minmem = [
    { call: "pain", image: Min1 },
    { call: "Deidara", image: Min2 },
    { call: "konan", image: Min3 },
    { call: "zetsu", image: Min4 },
    { call: "itachi", image: Min5 },
    { call: "sasori", image: Min6 },
    { call: "hidan", image: Min7 },
    { call: "kakuzu", image: Min8 },
    { call: "kisame", image: Min9 },
    { call: "orochimaru", image: Min10 },
  ]
  const [show, setShow] = useState(0);
  const [val ,setVal] = useState(false);
  return (
    <>
      <main>
        <section className="members-page full col-center">
          <h1>members</h1>
          <div className="mem-cover center">
            {/* this for the pic */}
            <div className="min-pic mem-s-box col-center">
              {minmem.map((item, i) => {
                return (
                  <>
                    <div className="min-hold center">
                      <img 
                      onClick={() => {
                         setShow(i);
                         setVal(!val)
                        }} 
                      src={item.image} 
                      alt={item.call} /></div>
                  </>
                )
              })}
            </div>
            {/* this for the details */}
            <div className="min-details mem-s-box">
              <div className="d-style center">
                <img src={member[show].minp} alt='' />
              </div>
              <div className={`d-cover center ${val ? 'call' : 'call2'}`}>
                <div className="d-txt d-box col-center">
                  <h1>{member[show].nam}</h1>
                  <p>{member[show].pg}</p>
                  <p>{member[show].pg2}</p>
                  <p>{member[show].pg3}</p>
                  <p>{member[show].pg4}</p>
                  <p>{member[show].pg5}</p>
                  <p>{member[show].pg6}</p>
                </div>
                <div className="d-pic d-box center">
                  <img src={member[show].pic} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

