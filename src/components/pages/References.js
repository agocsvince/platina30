import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReferenceContext } from '../../ReferenceContext';

const References = props => {
    const [state, setstate] = useState([])
    const { references, isLoaded } = useContext(ReferenceContext);

    useEffect(() => {
        if (isLoaded) {
            setstate(references)
        }
    }, [isLoaded,references])

    
    return (
        <body>
            <main>
                <section id="wip" className="py-1">
                    <div className="text ml-4 mt-2">
                        <h4 className="mb-05"><strong className="slash">\</strong> Referenciák</h4>
                        <h2 className="mb-2">Elkészült munkáink</h2>
                    </div>
                    <div className="images grid m-4">
                        {state.map(reference => (
                            <Link className="image" to={"/referenciak/" + reference.subtitle} key={reference.id}>
                                <img src={reference.gallery[0].url} alt="" className="mb-05"/>
                                <h3 className="mb-1">{reference.title}</h3>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </body>
    )
    
    
}

export default References;