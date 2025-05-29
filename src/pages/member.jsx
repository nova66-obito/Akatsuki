import React from "react";
import '../css/members.css';
import { motion } from "framer-motion";
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
    { nam: "pain", pic: Pic1, place: "right thumb zero", box: "1", minp: Min1 },
    { nam: "Deidara", pic: Pic2, place: "right index blue green", box: "2", minp: Min2 },
    { nam: "konan", pic: Pic3, place: "right midel white", box: "3", minp: Min3 },
    { nam: "itachi", pic: Pic4, place: "right ring scarlet", box: "4", minp: Min4 },
    { nam: "zetsu", pic: Pic5, place: "right pinky boar", box: "5", minp: Min5 },
    { nam: "sasori", pic: Pic6, place: "left thumb sphere", box: "6", minp: Min6 },
    { nam: "hidan", pic: Pic7, place: "left index three", box: "7", minp: Min7 },
    { nam: "kakuzu", pic: Pic8, place: "left midel north", box: "8", minp: Min8 },
    { nam: "kisame", pic: Pic9, place: "left ring south", box: "9", minp: Min9 },
    { nam: "orochimaru", pic: Pic10, place: "left pinky sky", box: "10", minp: Min10 },
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
  return (
    <>
      <main>
        <section className="members-page full col-center">
          <h1>members</h1>
          {member.map((item,j) => {
            return (
              <>
                <motion.div
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0, transition: { delay:0.2, duration:0.3 } }}
                viewport={{once:false , amount:0.3}}
                
                className={`m-holder m-hold${item.box} center`}>
                  <div className="h-left col-center min-pic">
                    {minmem.map((val, i) => {
                      return (
                        <>
                          <div className={`min-p-hold min-p${i}`}>
                            <img src={val.image} alt={val.call} />
                          </div>
                        </>
                      )
                    })}
                  </div>
                  <div className={`h-right min-pic h-r-${j}`}>
                    <div className={`min-holder center m-h-${j}`}>
                      <img src={item.minp} alt="" />
                    </div>
                    <div className={`h-r-holder h-r-h-${j} center`}>
                      <div className="h-r-txt">
                        <h1>{item.nam}</h1>
                        <p>Tragic Childhood: Orphaned during the Second Shinobi World War after
                          Konoha shinobi killed his parents; awakened the Rinnegan in grief.</p>
                        <p> Found Family: Rescued by Yahiko and Konan; they dreamed of ending
                          war and trained under Jiraiya.</p>
                        <p>Akatsuki’s Birth: Founded Akatsuki to
                          promote peace; gained followers and influence across Amegakure.</p>
                        <p> Yahiko’s Death: Yahiko died in an ambush by Hanzō and Danzō; Nagato
                          was left crippled and emotionally broken.</p>
                        <p>Becomes Pain: Adopted the
                          name "Pain," used Yahiko's body as the Deva Path, and believed peace
                          could only come through shared suffering. </p>
                        <p> Rule Over Amegakure:
                          Killed Hanzō, took over Amegakure, and was worshipped as a god by
                          the people.</p>
                      </div>
                      <div className="h-r-pic">
                        <img src={item.pic} alt={item.nam} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )
          })}
        </section>
      </main>
    </>
  )
}

