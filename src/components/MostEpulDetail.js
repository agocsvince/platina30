import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { MostEpulContext } from '../MostEpulContext';

const MostEpulDetail = props => {

    // Current photo index
    const [photoIndex, setPhotoIndex] = useState(0);

    // LightBox state: true/false
    const [isOpen, setIsOpen] = useState(false);

    // Import ReferncesContext
    const { mostEpuls, isLoaded } = useContext(MostEpulContext);

    // Get project name from url
    const { project } = useParams();

    // States for current porject and it's gallery
    const [ currentProject, setCurrentProject] = useState({});
    const [ gallery, setGallery] = useState([]);
    
    // Get current project from Context
    useEffect(() => {
        if (isLoaded) {
            const current = mostEpuls.filter(mostEpul => mostEpul.subtitle === project)[0];
            setCurrentProject(current)
            setGallery(current.gallery)
        }
    }, [project, mostEpuls, isLoaded])

    return (
        <section id="wip" className="py-1">
                <div className="text ml-4 mt-2">
                    <h4 className="mb-05"><strong className="slash">\</strong> Most épül</h4>
                    <h2 className="mb-2" id="name" data-name={project}>{currentProject.title}</h2>
                </div>
                <div className="images grid m-4">
                {gallery.map(current => (
                  <div className="reference-image" key={current.id} onClick={() => {setIsOpen(true); setPhotoIndex(gallery.indexOf(current))}} title={current.fileName} style={{ backgroundImage:"url(" + current.url + ")"}}/>
                  ))}
                </div>
                <div>
        {isOpen && (
          <Lightbox
            mainSrc={gallery[photoIndex].url}
            nextSrc={photoIndex === gallery.length - 1 ? gallery[0].url : gallery[(photoIndex + 1)].url}
            prevSrc={photoIndex === 0 ? gallery[(gallery.length - 1)].url : gallery[(photoIndex - 1) % gallery.length].url}
            enableZoom={false}
            imageTitle={gallery[photoIndex].fileName}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % gallery.length)}
          />
        )}
      </div>     
    </section>
    );
}

export default MostEpulDetail;