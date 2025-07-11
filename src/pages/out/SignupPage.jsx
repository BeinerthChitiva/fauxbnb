import { Fragment } from "react/jsx-runtime";
import { IconLeftArrow } from "../../components/icons/IconLeftArrow";
import { useState } from "react";

export default function SignupPage(){
    const [focusedInput, setFocusedInput] = useState(null);
    return(
        <Fragment>
            <div className="flex flex-col border border-[#B0B0B0] rounded-md w-[566px] my-[100px] place-self-center">
                <div className="flex flex-row p-4 items-center">
                    <div><IconLeftArrow/></div>
                    <span className="flex-1 text-center font-bold">Sign-Up</span>
                </div>
                <div className="w-full h-[1px] bg-[#EBEBEB]"></div>
                <div className="p-4">
                    <span className="font-bold">Legal name</span>
                    <div className="w-full mt-[20px]">
                        <div className="flex flex-col border border-[#B0B0B0] rounded-lg relative">
                            <input type="text" placeholder="First name on ID" onFocus={() => setFocusedInput('first')} onBlur={() => setFocusedInput(null)} className={`px-4 py-3 outline-none rounded-t-lg relative transition focus:ring-2 focus:ring-black ${focusedInput === 'first' ? 'z-10' : 'z-0'}`}/>
                            <div className="h-[1px] bg-[#B0B0B0]"></div>
                            <input type="text" placeholder="Last name on ID" onFocus={() => setFocusedInput('last')} onBlur={() => setFocusedInput(null)} className={`px-4 py-3 outline-none rounded-b-lg relative transition focus:ring-2 focus:ring-black ${focusedInput === 'last' ? 'z-10' : 'z-0'}`}/>
                        </div>
                    </div>
                    <p className="text-[12px] mt-[10px] mb-[20px] text-gray-400">Make sure this matches the name on your government ID. If you go by another name, you can add a <span className="font-bold underline">preferred first name.</span></p>
                    <span className="font-bold">Date of birth</span>
                    <div className="border border-[#B0B0B0] rounded-lg focus-within:ring-2 focus-within:ring-black transition">
                        <input type="text" placeholder="Birthdate" className="px-4 py-3 w-full outline-none rounded-lg"/>
                    </div>
                    <span className="font-bold">Contact info</span>
                    <div className="border border-[#B0B0B0] rounded-lg focus-within:ring-2 focus-within:ring-black transition">
                        <input
                            type="text"
                            placeholder="Email"
                            className="px-4 py-3 w-full outline-none rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}