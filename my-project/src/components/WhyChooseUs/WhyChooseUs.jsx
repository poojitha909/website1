import React from 'react'
import {GrYoga} from 'react-icons/gr'
import {FaDumbbell} from 'react-icons/fa'
import {GiGymBag} from 'react-icons/gi'
import {motion} from 'framer-motion'
import { Slideleft } from '../../utiliy/animation'

const WhyChooseUsList = [
    {
        id:1,
        title:"One-on One Teaching",
        desc:"All of our special education experts have a degree in special education.",
        icon:<GrYoga/>,
        bgColor:"#0063ff",
        delay:0.3
    },
    {
        id:2,
        title:"24/7 Tutor Avaliability",
        desc:"Our tutors are always avaliable to respond as quick as poosible for you.",
        icon:<FaDumbbell/>,
        bgColor:"#73bc00",
        delay:0.3
    },
    {
        id:3,
        title:"Interactive Whiteboard",
        desc:"Our digital whiteboard equipped with audio and video chat feature.",
        icon:<GiGymBag/>,
        bgColor:"#fa6400",
        delay:0.3
    },
    {
        id:4,
        title:"Affordable Price",
        desc:"Choose an expert tutor based on your budget and per hour.",
        icon:<GiGymBag/>,
        bgColor:"#fe6baa",
        delay:0.3
    },
]

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
        <div className="container py-24">
            {/*header*/}
            <div>
                <div className="space-y-4 text-center max-w-[500px] mx-auto mb-5">
                    <h1 className="uppercase font-semibold text-orange-600">Why Choose Us</h1>
                    <p className="font-semibold text-3xl">Benefits of online tutoring services with us</p>
                </div>
            </div>
            {/* card section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {WhyChooseUsList.map((item) =>{
                        return (
                            <motion.div 
                            variants={Slideleft(item.delay)}
                            initial="hidden"
                            whileInview={"visible"}
                            key={item.id}
                            className="space-y-4 p-4 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
                                <div
                                style={{backgroundColor:item.bgColor}}
                                className="w-10 h-10 rounded-lg flex justify-center items-center">
                                    <div className="text-2xl">{item.icon}</div>
                                </div>
                                
                                <p className="text-2xl font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>

    </div>
  )
}

export default WhyChooseUs