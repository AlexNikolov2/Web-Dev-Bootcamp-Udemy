import image from '../../../../assets/syria.webp'

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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem rem quae,
                    omnis vel nulla impedit qui voluptates libero, itaque ab labore eos velit unde.
                    Dolore neque deserunt ipsum ea numquam!
                </p>
            </section>
        </section>
    );
}