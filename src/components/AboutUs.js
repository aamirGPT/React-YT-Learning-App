import React from "react";

export default function AboutUs(props) {
    return (
        <div className="container" data-bs-theme={props.mode}>
            <h1 className="my-3">About us</h1>
            <div
                className="accordion my-3"
                id="accordionExample"
                data-bs-theme={props.mode}
            >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Analyze your Text
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Dive into the intricacies of your text
                            </strong>{" "}
                            with ease—this analysis tool empowers you to unravel
                            insights, dissecting nuances and trends that escape
                            the naked eye. Uncover the layers of meaning, refine
                            your communication, and gain valuable perspectives
                            as you navigate the depths of your written
                            expression. Elevate your understanding, one word at
                            a time, with this invaluable resource designed to
                            decode and enhance the impact of your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Free to Use
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Craft your narratives effortlessly</strong>,
                            as this free-to-use editor provides a canvas for
                            expression without the shackles of subscription
                            fees. Embrace the freedom to innovate, edit, and
                            refine, ensuring your creative journey remains
                            boundless and accessible to all.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Browser Compatible
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Surf the web seamlessly</strong> with our
                            browser-compatible experience—your gateway to a
                            smooth online journey across platforms. Whether
                            you're exploring on desktop or mobile, enjoy the
                            freedom of compatibility, ensuring a consistent and
                            reliable browsing experience that adapts
                            effortlessly to your preferred device. Break free
                            from constraints and navigate the digital landscape
                            effortlessly, knowing your online adventures are
                            supported across a spectrum of browsers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
