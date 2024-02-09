import React from "react";
import data from "../data/CustomersFeedback.json"

function Feedback() {

    return (
        <>
            {data.map((d) => (
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card" style={{height:80}}>
                            <div class="card-body">
                                <p class="card-text">{d.comments}</p>
                                <h6 class="card-title text-right" style={{ textAlign: "right" }}>-{d.name}</h6>
                            </div></div>
                    </div>
                </div>
            ))
            }
        </>
    )

}

export default Feedback;