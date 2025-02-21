import { getExperienceData } from "../../utils/index"
import ExperienceList from "../ExperienceList";


export default function EducationAndExperience() {
    const experiences = getExperienceData()
    return (
        <>
            <section id="#experience">
                <h2 className="text-center lg:text-5xl text-3xl font-bold mb-8">My Experience</h2>

                <div className="mx-32">
                    <ol className="relative border-s border-gray-200">
                        {
                            experiences.map((experience) => (
                                <ExperienceList key={experience.id} {...experience} />
                            ))
                        }
                    </ol>
                </div>
            </section>
        </>
    )
}