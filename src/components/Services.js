import Title from './Title'
import { services } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">

        <Title title="Our" spanTitle="Services"/>

        <div className="section-center services-center">
        {services.map((service) => {
            const {id, title, desc, icon} = service
            return (
                <article key={id} className="service">
                    <span className="service-icon"><i className={icon}></i></span>
                    <div className="service-info">
                        <h4 className="service-title">{title}</h4>
                        <p className="service-text">
                            {desc}
                        </p>
                    </div>
                </article>
            );
        })}
        </div>
  </section>
  )
}
export default Services