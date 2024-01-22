import './style.scss'
import {
    useParams
} from 'react-router-dom'

export default function Annonce() {

    return (
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-4'>
            <h1>Appartement cosy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
            </div>
            <p>Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement</p>
            <p>Nathalie Jean</p>
            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" />
            <p>Ile de France - Paris 15e</p>
            <ul>
                <li>Équipements de base</li>
                <li>Micro-Ondes</li>
                <li>Douche italienne</li>
                <li>Frigo</li>
                <li>WIFI</li>
            </ul>
        </div>
    )
}