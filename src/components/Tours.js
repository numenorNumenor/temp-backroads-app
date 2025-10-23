import Title from "./Title"
import {tours} from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">

    <Title title="featured" spanTitle="tours" />

    <div className="section-center featured-center">

        {tours.map((tour) => {
            const {id,img,title,desc,location,duration,price,date} = tour
            return (
                <article key={id} className="tour-card">
                    <div className="tour-img-container">
                    <img src={img} className="tour-img" alt={title} />
                    <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                    <h4>{title}</h4>
                    <p>
                        {desc}
                    </p>
                    <div className="tour-footer">
                        <p>
                        <span><i className="fas fa-map"></i></span>{location}
                        </p>
                        <p>{duration} Days</p>
                        <p>from ${price}</p>
                    </div>
                    </div>
                </article>

            );
        })}


    </div>
  </section>
  )
}
export default Tours