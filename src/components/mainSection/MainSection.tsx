import React from "react";
import Experience from "../common/experience/Experience";
import { data } from "../common/experience/data";
import Profile from "../sideBar/Profile";
import Education from "./Education";
import Languages from "./Languages";

const MainSection = () => {
    return (
        <>
            <section className="ml-10 pt-14 py-14 pt-7 p-2">
                <div className="">
                    <div className="flex justify-center lg:hidden">
                        <Profile />
                    </div>
                    <h1 className="font-bold text-lg">Profile</h1>
                    <p className="text-[#adadad] mt-2 mb-5">
                        A product designer is a creative professional who specializes in
                        conceptualizing, designing, and refining the user experience and
                        interface of products or services. They play a pivotal role in
                        shaping the way users interact with digital and physical products,
                        aiming to enhance usability, functionality, and aesthetic appeal.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Experience</h1>
                    {data.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <Experience data={item} />
                            </React.Fragment>
                        );
                    })}
                </div>
                <Education />
                <Languages />
            </section>
        </>
    );
};

export default MainSection;
