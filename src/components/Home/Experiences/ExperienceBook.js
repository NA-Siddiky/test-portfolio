import React from 'react';
import HTMLFlipBook from "react-pageflip";
import webDevelopment from "../../../images/Certificate/Web Development.jpg"
import python from "../../../images/Certificate/Python.jpg"
import git from "../../../images/Certificate/Git.jpg"
import command from "../../../images/Certificate/Command Line Linux.jpg"
import lict from "../../../images/Certificate/LICT-1.jpg"
import workshop from "../../../images/Certificate/Workshop.jpg"
import BSC from "../../../images/Certificate/B.Sc Certificate.jpg"
import BCS from "../../../images/Certificate/BCS Certificate.jpg"
import ielts from "../../../images/Certificate/IELTS_Certificate-1.jpg"


const ExperienceBook = () => {
    return (
        <div className="flex justify-center p-3">
            <HTMLFlipBook width={600} height={700}>
                <div className="bg-blue-400 shadow-md">
                    <h2>Welcome to my Certificate Album</h2>
                </div>
                <div className="bg-blue-400 shadow-md">
                    <img className="p-2" src={webDevelopment} alt="" />
                    <link rel="stylesheet" href="https://www.coursera.org/account/accomplishments/certificate/5MZCK4U5YJJZ" />
                </div>
                <div className="bg-blue-200 shadow-md">
                    <img className="p-2" src={python} alt="" />
                    <link rel="stylesheet" href="https://www.coursera.org/account/accomplishments/certificate/GM63CYXYW9GQ" />
                </div>
                <div className="bg-blue-300 shadow-md">
                    <img className="p-2" src={git} alt="" />
                </div>
                <div className="bg-blue-200 shadow-md">
                    <img className="p-2" src={command} alt="" />
                </div>
                <div className="bg-blue-500 shadow-md">
                    <img className="p-2" src={lict} alt="" />
                </div>
                <div className="bg-blue-200 shadow-md">
                    <img className="p-2" src={workshop} alt="" />
                </div>
                <div className="bg-blue-300 shadow-md">
                    <img className="p-2" src={BSC} alt="" />
                </div>
                <div className="bg-blue-200 shadow-md">
                    <img className="p-2" src={BCS} alt="" />
                </div>
                <div className="bg-blue-500 shadow-md">
                    <img className="p-2" src={ielts} alt="" />
                </div>
                <div className="bg-blue-500 shadow-md">
                    <h1>Thank You</h1>
                </div>

            </HTMLFlipBook>
        </div>
    );
};

export default ExperienceBook;