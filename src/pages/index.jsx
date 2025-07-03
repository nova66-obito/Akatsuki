import React from "react";
import "../css/main.css";
import "../css/main-respon.css";
import Contact from "../components/form/contact";
import Mod from "../assets/model1.png";
import { motion } from "framer-motion";
// image member
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
// image lore
import Lore1 from "../assets/lore1.png";
import Lore2 from "../assets/lore2.png";
import Lore3 from "../assets/lore3.png";
// gallery image
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g11.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
// video
import v1 from "../assets/mvid.mp4"
import { Link } from "react-router-dom";
export default function Main() {
    // memeber
    const member = [
        { nam: "pain", pic: Pic1, place: "right thumb zero" },
        { nam: "Deidara", pic: Pic2, place: "right index blue green" },
        { nam: "konan", pic: Pic3, place: "right midel white" },
        { nam: "itachi", pic: Pic4, place: "right ring scarlet" },
        { nam: "zetsu", pic: Pic5, place: "right pinky boar" },
        { nam: "sasori", pic: Pic6, place: "left thumb sphere" },
        { nam: "hidan", pic: Pic7, place: "left index three" },
        { nam: "kakuzu", pic: Pic8, place: "left midel north" },
        { nam: "kisame", pic: Pic9, place: "left ring south" },
        { nam: "orochimaru", pic: Pic10, place: "left pinky sky" },
    ]
    // gallery
    const gal1 = [
        { img: g1, place: "left thumb" },
        { img: g2, place: "left index" },
        { img: g3, place: "left midel" },
        { img: g4, place: "left ring" },
        { img: g5, place: "left pinky" },
    ]
    const gal2 = [
        { img: g4, place: "left ring" },
        { img: g5, place: "left pinky" },
        { img: g6, place: "right thumb" },
        { img: g7, place: "right index" },
    ]
    const ga13 = [
        { img: g8, place: "right midel" },
        { img: g9, place: "right ring" },
        { img: g10, place: "right pinky" },
        { img: g6, place: "right thumb" },
        { img: g7, place: "right index" },
    ]
    return (
        <>
            <section className="overall">
                {/* this div for the videoholder */}
                <div className="v-holder col-center">
                    <div className="v-main">
                        <video loop autoPlay muted src={v1}></video>
                    </div>
                    <div className="v-txt col-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: false ,amount:.5}}

                            className="v-b-txt col-center ">
                            <h1>Akatsuki</h1>
                            <p>The rogue shinobi who defied the villages—and fate itself.</p>
                            <Link to="members"><button>Meet the members</button></Link>
                        </motion.div>
                    </div>
                </div>
                {/* intro sec */}
                <div className="intro center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: false ,amount:.5}}
                        className="i-box i-txt full col-center">
                        <h1>Introduction Section</h1>
                        <p>The Akatsuki, originally formed by Yahiko during the Third Great Ninja War, began as a group seeking peace for the war-torn Hidden Rain Village. However, after Yahiko's death, leadership passed to Nagato (Pain), and the group’s ideology shifted drastically. Under Nagato, the Akatsuki became a powerful rogue organization with the goal of capturing all the tailed beasts to create a weapon of mass destruction, which they believed would force the world into peace through fear. The group left a lasting legacy as one of the most dangerous threats to the ninja world, influencing major events and battles, and ultimately playing a crucial role in uniting the shinobi nations against a common enemy.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } }}
                        viewport={{ once: false ,amount:.5}}
                        className="i-box i-pic center">
                        <img src={Mod} alt="akatuski group pic" />
                    </motion.div>
                </div>
                {/* member */}
                <div className="member full col-center">
                    <h1>member</h1>
                    <div className="mem-holder center">
                        {member.map((item) => {
                            return (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                                        viewport={{ once: false ,amount:.5}}
                                        className="mem-box col-center">
                                        <div className="m-top">
                                            <img src={item.pic} alt={item.nam} />
                                        </div>
                                        <div className="m-bot col-center">
                                            <h3>{item.nam}</h3>
                                            <p>{item.place}</p>
                                        </div>
                                    </motion.div>
                                </>
                            )
                        })}
                    </div>
                    <Link to="members"><button>see details</button></Link>
                </div>
                {/* lore*/}
                <div className="lore full col-center">
                    <h1>lore</h1>
                    {/* f-box */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                        viewport={{ once: false ,amount:.5}}
                        className="lo-cover col-center lo-cover1">
                        <div className="lo-c-top center">
                            <div className="lo-pic">
                                <img src={Lore1} alt="group pic" />
                            </div>
                            <div className="lo-txt">
                                <h1>The Akatsuki: A Legacy of Ambition, Power, and Tragedy</h1>
                                <p>The Akatsuki began as a hopeful resistance group in the war-torn land of the Hidden Rain Village, founded by Yahiko with the goal of achieving peace in a world ravaged by conflict. However, after the tragic death of Yahiko and the takeover by Nagato (Pain), the organization’s ideology evolved, becoming an extremist</p>
                            </div>
                        </div>
                        <div className="lo-c-bot center">
                            <p>force dedicated to achieving peace through control, fear, and domination. The Akatsuki would go on to become one of the most dangerous and influential organizations in the shinobi world.</p>
                        </div>
                    </motion.div>
                    {/* s-box */}
                    <motion.div 
                     initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0,transition:{delay:0.3,duration:0.5}}}
                    viewport={{once:false,amount:.5}}
                    className="lo-cover col-center lo-cover2">
                        <div className="lo-c-top center">
                            <div className="lo-pic">
                                <img src={Lore2} alt="group pic" />
                            </div>
                            <div className="lo-txt">
                                <h1>The Formation of the Akatsuki</h1>
                                <p>Originally founded by Yahiko and his companions as a peaceful resistance group, the Akatsuki's true transformation began after Yahiko’s death. The organization shifted under the leadership of Nagato, who, under the guise of Pain, sought to use the power of the tailed beasts (Bijuu) to impose his vision of peace on the world. What began as a group</p>
                            </div>
                        </div>
                        <div className="lo-c-bot center">
                            <p>fighting for peace in their homeland quickly became a rogue collective of rogue ninja with a singular, dangerous goal—capturing the Tailed Beasts to gain unimaginable power.</p>
                        </div>
                    </motion.div>
                    {/* t-box */}
                    <motion.div 
                     initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0,transition:{delay:0.3,duration:0.5}}}
                    viewport={{once:false,amount:.5}}
                    className="lo-cover col-center lo-cover3">
                        <div className="lo-c-top center">
                            <div className="lo-pic">
                                <img src={Lore3} alt="group pic" />
                            </div>
                            <div className="lo-txt">
                                <h1>Akatsuki's Goals: Peace Through Fear</h1>
                                <p>The Akatsuki's primary objective was to capture all the Tailed Beasts scattered across the shinobi world. The reasoning behind this pursuit was rooted in the belief that only by controlling the immense power of these creatures could Nagato force the world into submission, bringing an end to the endless wars</p>
                            </div>
                        </div>
                        <div className="lo-c-bot col-center">
                            <p>that plagued the land. To accomplish this, the organization would stop at nothing, utilizing their individual talents, ruthlessness, and cunning to accomplish their mission.</p>
                            <p>However, the true nature of the Akatsuki was far from unified, with each member possessing their own motives and objectives. Some, like Orochimaru, were driven by personal ambition, seeking immortality or the mastery of forbidden jutsu. Others, like Itachi Uchiha, were tragic figures, bound by their own personal sacrifices and hidden agendas.</p>
                        </div>
                    </motion.div>
                </div>
                {/* gallery */}
                <div className="gallery full col-center">
                    <h1>gallery</h1>
                    <motion.div
                     initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0,transition:{delay:0.4,duration:0.5}}}
                    viewport={{once:true,amount:.5}}
                    className="g-cover center">
                        <div className="g-sub g-sub1 col-center">
                            {gal1.map((item) => {
                                return (
                                    <>
                                        <div className="g-hold gh-1">
                                            <img src={item.img} alt={item.place} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="g-sub g-sub2 col-center">
                            {gal2.map((item) => {
                                return (
                                    <>
                                        <div className="g-hold gh-2">
                                            <img src={item.img} alt={item.place} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="g-sub g-sub3 col-center">
                            {ga13.map((item) => {
                                return (
                                    <>
                                        <div className="g-hold gh-3">
                                            <img src={item.img} alt={item.place} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
                {/* form contact */}
                <Contact />
            </section>
        </>
    )
}