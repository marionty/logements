import './style.scss'
import { useState, useEffect } from 'react'
import {
    Link
} from 'react-router-dom'

export default function Home() {

    const [annonces, setAnnonces] = useState([])

    useEffect(() => {
        fetch('https://titi.startwin.fr/logements')
            .then(res => res.json())
            .then((data) => {
                setAnnonces(data.splice(0, 3))
            })
    }, [])

    return (
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prepagence immo</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {annonces.map((annonce, index) => (
                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <img src={annonce.cover} alt={annonce.title} />
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <span className="absolute inset-0"></span>
                                        {annonce.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{annonce.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm leading-6">
                                        <Link to={"/annonce/" + index}>En savoir plus</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}