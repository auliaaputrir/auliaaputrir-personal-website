import { MdWorkHistory } from "react-icons/md";


export default function ExperienceCard({ company, position, location, timeline, description }) {
    return (
        <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-sky-500 rounded-full -start-3 ring-8 ring-white text-white">
                <MdWorkHistory />
            </span>
            <div class="bg-white p-4 shadow-md rounded-lg w-full ">
                <h3 class="text-lg font-bold">{company}</h3>
                <div className="lg:grid lg:grid-cols-[1fr_20%] lg:gap-4 flex flex-col-reverse">
                    <div >
                        <p class="text-gray-500">{position}</p>
                        {
                            description.map((desc)=>(
                                <div className="flex gap-2 items-start"> 
                                   - <p class="text-gray-700 ">{desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="lg:justify-self-end">
                        <p className="font-semibold">{location}</p>
                        <p className="text-sm">{timeline}</p>
                    </div>

                </div>
            </div>
        </li>
    )
}