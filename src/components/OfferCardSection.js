import styles from "../styles/offercard.module.css";
export default function OfferCardSection() {
  const defaultText =
    "I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.";

  const cardDetail = [
    {
      title: "Workflows That Work",
      image: "/image/CardWorkflows.png",
      description: defaultText,
    },
    {
      title: "All-In-One Solution",
      image: "/image/CardAll-In-One.png",
      description: defaultText,
    },
    {
      title: "Comprehensive Customer Support",
      image: "/image/CardComprehensive.png",
      description: defaultText,
    },
    {
      title: "Smart Automation Tools",
      image: "/image/CardSmart.png",
      description: defaultText,
    },
  ];

  return (
    <>
      <main>
        <article>
          <h1> What We Offer </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </article>
        <figure>
          <section>
            <aside>
              {cardDetail.map((card, index) => (
                <div key={index}>
                  <div>
                    <img
                      src={card.image}
                      alt={card.title}
                      className={styles.CardSection}
                    />
                  </div>
                  <figcaption>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                  </figcaption>
                </div>
              ))}
            </aside>
          </section>
        </figure>
      </main>
    </>
  );
}
