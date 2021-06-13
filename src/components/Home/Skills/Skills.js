import React, { useEffect, useState } from 'react';
import SkillDetails from './SkillDetails';
import './Skills.css'
import node from '../../../images/skill_ico/node.png';
import html from '../../../images/skill_ico/html.png';
import css from '../../../images/skill_ico/css.png';
import js from '../../../images/skill_ico/js.png';
import express from '../../../images/skill_ico/express.png';
import tailwindcss from '../../../images/skill_ico/tailwindcss.png';


const mySkills = [
    {
        id: 1,
        done: '90',
        technologyName: 'HTML',
        image: { html },
        category: 'frontEnd'

    },
    {
        id: 2,
        done: '80',
        technologyName: 'CSS',
        image: { html },
        category: 'tools'
    },
    {
        id: 3,
        done: '95',
        technologyName: 'REACT',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 4,
        done: '85',
        technologyName: 'REACT NATIVE',
        image: { html },
        category: 'tools'
    },
    {
        id: 5,
        done: '60',
        technologyName: 'TYPESCRIPT',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 6,
        done: '90',
        technologyName: 'REDUX',
        image: { html },
        category: 'tools'
    },
    {
        id: 7,
        done: '80',
        technologyName: 'NODE',
        image: { html },
        category: 'backEnd'
    },
    {
        id: 8,
        done: '90',
        technologyName: 'EXPRESS',
        image: { html },
        category: 'backEnd'
    },
    {
        id: 9,
        done: '85',
        technologyName: 'MONGO DB',
        image: { html },
        category: 'backEnd'
    },
    {
        id: 10,
        done: '90',
        technologyName: 'REDUX',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 11,
        done: '80',
        technologyName: 'NODE',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 12,
        done: '90',
        technologyName: 'EXPRESS',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 13,
        done: '85',
        technologyName: 'MONGO DB',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 14,
        done: '90',
        technologyName: 'EXPRESS',
        image: { html },
        category: 'frontEnd'
    },
    {
        id: 15,
        done: '85',
        technologyName: 'MONGO DB',
        image: { html },
        category: 'frontEnd'
    },
]



const Skills = () => {

    const [getSkill, setGetSkill] = useState([]);
    const [skills, setSkills] = useState([mySkills]);
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);
    const [tools, setTools] = useState(false);


    useEffect(() => {
        const specificSkill = mySkills.filter((skill) => skill.category === "frontEnd");
        setGetSkill(specificSkill);
    }, [skills]);



    const frontEndData = () => {
        const specificSkill = mySkills.filter((skill) => skill.category === "frontEnd");
        setGetSkill(specificSkill);
        setFrontEnd(true);
        setBackEnd(false);
        setTools(false);
    };
    const backEndData = () => {
        const specificSkill = mySkills.filter((skill) => skill.category === "backEnd");
        setGetSkill(specificSkill);
        setFrontEnd(false);
        setBackEnd(true);
        setTools(false);
    };
    const toolsData = () => {
        const specificSkill = mySkills.filter((skill) => skill.category === "tools");
        setGetSkill(specificSkill);
        setFrontEnd(false);
        setBackEnd(false);
        setTools(true);
    };


    return (
        <section className="w-100 container">

            <h1 className="text-center section-heading my-5">My Skills</h1>
            <nav>
                <div class="nav nav-tabs d-flex justify-content-center align-items-center" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Front-End</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Back-End</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Tools</button>
                </div>
            </nav>

            <div>

                {getSkill.map(() => <p>abcd</p>)}

            </div>
            <div>

                {getSkill.map(() => <p>xyz</p>)}

            </div>
            <div>

                {getSkill.map(() => <p>ccc</p>)}

            </div>


            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={express} alt="" />
                        </div>
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={tailwindcss} alt="" />
                        </div>
                    </div>

                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={express} alt="" />
                        </div>
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={tailwindcss} alt="" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={express} alt="" />
                        </div>
                        <div className="skill-item d-flex justify-content-center align-items-center m-4 p-4">
                            <img src={tailwindcss} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Progress Bar  */}
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    {
                        mySkills.map(skill => <SkillDetails done={skill.done} technologyName={skill.technologyName} ></SkillDetails>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Skills;