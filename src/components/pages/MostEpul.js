import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MostEpulContext } from '../../MostEpulContext';


const MostEpul = props => {
    const [state, setstate] = useState([])
    const { mostEpuls, isLoaded } = useContext(MostEpulContext);

    useEffect(() => {
        if (isLoaded) {
            setstate(mostEpuls)
        }
    }, [isLoaded,mostEpuls])

    return (
        <main>
            <section id="wip" className="py-1">
                <div className="text ml-4 mt-2">
                    <h4 className="mb-05"><strong className="slash">\</strong> Referenciák</h4>
                    <h2 className="mb-2">Elkészült munkáink</h2>
                </div>
                <div className="images grid m-4">
                    {state.map(mostEpul => (
                        <Link className="image" to={"/most-epul/" + mostEpul.subtitle} key={mostEpul.id}>
                            <img src={mostEpul.gallery[0].url} alt="" className="mb-05"/>
                            <h3 className="mb-1">{mostEpul.title}</h3>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default MostEpul;