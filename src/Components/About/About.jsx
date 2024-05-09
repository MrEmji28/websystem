import React from "react";

function About() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-1/4 p-4">
                    <div style={{ backgroundColor: '#1C232B', height: '200px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)', outline: 'none' }} className="p-4 rounded-lg shadow-md flex flex-col justify-center">
                        <h2 className="text-lg font-semibold mb-1 text-center">Our Goal</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante magna. Donec efficitur, odio eget dictum vehicula, purus mi condimentum magna, sed tincidunt nulla arcu eget ipsum.</p>
                    </div>
                </div>
                <div className="w-1/4 p-4">
                    <div style={{ backgroundColor: '#1C232B', height: '200px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)', outline: 'none' }} className="p-4 rounded-lg shadow-md flex flex-col justify-center">
                        <h2 className="text-lg font-semibold mb-2 text-center">Our Purpose</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante magna. Donec efficitur, odio eget dictum vehicula, purus mi condimentum magna, sed tincidunt nulla arcu eget ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
