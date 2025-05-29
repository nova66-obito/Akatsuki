import React from "react";
import '../css/lore.css';
import Group from "../assets/group.jfif";
import Lore1 from "../assets/l1.jfif";
import Lore2 from "../assets/lore4.jpeg";
import { motion } from "framer-motion";
export default function Lore() {
    return (
        <>
            <main className="col-center lore-page full">
                {/*this for the leader  */}
                <motion.div
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0,transition:{delay:0.3,duration:0.3}}}
                viewport={{once:false ,amount:0.3}}
                className="creater col-center full">
                    <h1>The Founders: Yahiko, Konan, and Nagato</h1>
                    <div className="found-img">
                        <img src={Lore1} alt="founder" />
                    </div>
                    <div className="found-txt full l-txt">
                        <p>Yahiko, Konan, and Nagato were three orphans from the Hidden Rain Village, deeply scarred by the horrors of the Second Great Shinobi War. They were taken in by Jiraiya, one of the legendary Sannin of Konoha, who taught them ninjutsu techniques and the values of courage and friendship.</p>
                        <p>Yahiko, the most charismatic of the trio, dreamed of leading his village toward peace. Konan, the only female member, stood out with her kunoichi skills and mastery of paper techniques. Nagato, the wielder of the powerful Rinnegan, possessed immense strength but remained a reserved individual.</p>
                        <p>ogether, these three childhood friends founded the Akatsuki, an organization that initially promoted a pacifist ideal. Their strong bond and desire to rebuild a better world left a significant mark on ninja history.</p>
                        <p>Inspired by Jiraiya’s teachings and the story of the legendary Sage of the Six Paths, the first Rinnegan user, Yahiko, Konan, and Nagato founded the Akatsuki. Their primary mission? To create a world without war where all ninjas could live in harmony. They aimed to achieve this goal through diplomacy and negotiation.</p>
                        <p>At first, a group of about twenty ninjas sharing this vision joined them. The Akatsuki was seen as a beacon of hope by the citizens of Ame, earning their respect and admiration. But things did not go as planned...</p>
                        <h1>The Descent into Darkness</h1>
                        <p>Despite their initial dreams, a tragic turning point altered the fate of the Akatsuki. After Yahiko’s assassination by Hanzō, Nagato, overwhelmed by grief and a thirst for revenge, fell under the insidious influence of Obito Uchiha, who masqueraded as Madara.</p>
                        <p>A cunning manipulator, Obito gradually led Nagato away from the path of peace, exploiting his sorrow to lure him into a destructive quest for power.</p>
                        <p>Under the name Pain, Nagato transformed the Akatsuki into a formidable criminal organization. Their goal was no longer peace but the collection of the nine bijū to fulfill Obito’s dark plan: the Infinite Tsukuyomi, an illusion designed to enslave humanity!</p>
                    </div>
                </motion.div>
                {/* box1 */}
                <motion.div 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0,transition:{delay:0.3,duration:0.3}}}
                viewport={{once:false ,amount:0.3}}
                className="box-story center">
                    <div className="l-pic l-box center">
                        <img src={Group} alt="akastuki group" />
                    </div>
                    <div className="l-txt l-box full col-center">
                        <h1>The History of Akatsuki</h1>
                        <p>At first, the Akatsuki was merely a group of young ninjas striving to bring peace to their war-ravaged village. Unfortunately, their noble mission turned into a nightmare after the death of Yahiko. Manipulated by Obito Uchiha, Nagato transformed the Akatsuki into a criminal organization aiming to dominate the world.</p>
                        <p>But how did their ideals shift so drastically toward violence? Let’s explore the origins and mysteries of the Akatsuki.</p>
                    </div>
                </motion.div>
                {/* box2 */}
                <motion.div 
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0,transition:{delay:0.3,duration:0.3}}}
                viewport={{once:false ,amount:0.3}}
                className="box-story box-s2 col-center lo-cover2">
                    <div className="center top-s-lore lo-c-top">
                        <div className="l-pic lo-pic l-box center">
                            <img src={Lore2} alt="akastuki group" />
                        </div>
                        <div className="l-txt lo-txt l-box full col-center">
                            <h1>Konan and Nagato (Pain): The Last Founders</h1>
                            <p>Konan and Nagato were the two last survivors of the Akatsuki’s original trio. After the tragic death of their friend Yahiko, they transformed their immense grief into a new, destructive mission.</p>
                            <p>Now rulers of the Hidden Rain Village, they embraced a radical philosophy: only those who have experienced true pain can truly appreciate peace. Convinced by Obito, who posed as Madara, they blindly supported his “Moon Eye” plan.</p>
                        </div>
                    </div>
                    <div className="long-txt lo-c-bot l-txt">
                          <p>Konan, the only female member of the organization, was fiercely loyal to Nagato. Nicknamed the “Angel of God,” she mastered a unique ninjutsu: paper manipulation. Her origami-based offensive and defensive techniques made her almost untouchable.</p>
                          <p>Nagato, the leader of the Akatsuki under the identity of Pain, wielded extraordinary power thanks to his Rinnegan. He controlled six different bodies simultaneously, vastly amplifying his combat abilities. Though he preached peace, he did not hesitate to sacrifice innocent lives... A truly complex character!</p>
                    </div>
                </motion.div>
                <div className="story-link">
                     <a href="https://www.cbr.com/naruto-all-akatsuki-members-in-order-deaths/6/" target="-blank">
                     <button>see more</button>
                     </a>
                </div>
            </main>
        </>
    )
}