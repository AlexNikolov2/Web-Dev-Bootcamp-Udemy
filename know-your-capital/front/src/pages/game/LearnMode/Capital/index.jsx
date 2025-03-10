import image from "../../../../assets/syria.webp";
import "./style.css";

export function Capital() {
    const population = 6500000;
    const yearFounded = 1390;
    return (
        <section className="capital-wrap">
            <section className="container-left">
                <img src={image} alt="" />
                <p>Population : {population} </p>
                <p>Founded in : {yearFounded}</p>
            </section>
            <section className="container-right">
                <section className="right-title">
                    <h2>Dimashq</h2>
                    <h3>Capital of Souria</h3>
                </section>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem rem
                    quae, omnis vel nulla impedit qui voluptates libero, itaque ab labore
                    eos velit unde. Dolore neque deserunt ipsum ea numquam! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Distinctio quia ipsam
                    necessitatibus vitae placeat pariatur, recusandae quidem dolorum
                    eveniet perspiciatis cumque. Impedit officiis repudiandae aut quisquam
                    quas officia, minus modi!
                </p>
            </section>
        </section>
    );
}
