import React from 'react';
import CountUp from 'react-countup';

const NumbersCount = () => {
    return (
        <div className="bg-secondary text-white py-12">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 font-semibold">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">
                        <CountUp end={872} duration={5}  enableScrollSpy={true} scrollSpyOnce={true}/>
                    </p>
                    <p>Expert Tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">
                    <CountUp end={20000} separator="," duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={true}/>
                    </p>
                    <p>Hours Content</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl ">
                    <CountUp end={298} duration={3}  enableScrollSpy={true} scrollSpyOnce={true}/>
                    </p>
                    <p>Subjects and Courses</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl">
                    <CountUp end={72878} duration={5}  enableScrollSpy={true} scrollSpyOnce={true}/>
                    </p>
                    <p>Active Students</p>
                </div>

            </div>
        </div>
    );
};

export default NumbersCount;