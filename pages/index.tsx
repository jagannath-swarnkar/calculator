import moment from "moment";
import React, { useState } from "react";

export default function App() {
    const [state, setState] = useState<any>({});
    const [startDate, setStartDate] = useState<any>();
    const [endDate, setEndDate] = useState<any>();
    const [currentDate, setCurrentDate] = useState<any>();
    const [dob, setDob] = useState<any>();
    React.useEffect(() => {
        setEndDate(moment().format("YYYY-MM-DD"));
    }, []);
    React.useEffect(() => {
        if (endDate) {
            let days = moment(endDate).format("DD");
            let months = moment(endDate).format("MM");
            let years = moment(endDate).format("YYYY");
            var cd = moment([years, months, days]);
            setCurrentDate(cd);
        }
    }, [endDate]);

    React.useEffect(() => {
        if (startDate) {
            let days = moment(startDate).format("DD");
            let months = moment(startDate).format("MM");
            let years = moment(startDate).format("YYYY");
            var cd = moment([years, months, days]);
            setDob(cd);
        }
    }, [startDate]);

    React.useEffect(() => {
        if (currentDate && dob) {
            let years = currentDate.diff(dob, "years");
            let months = currentDate.diff(dob, "months");
            let days = currentDate.diff(dob, "days");
            let weeks = currentDate.diff(dob, "weeks");
            let hours = currentDate.diff(dob, "hours");
            let minutes = currentDate.diff(dob, "minutes");
            let seconds = currentDate.diff(dob, "seconds");
            setState({
                years,
                days,
                weeks,
                months,
                hours,
                minutes,
                seconds,
            });
        }
    }, [currentDate, dob]);
    return (
        <div  id="age-calculator" className="age-calculator vh-100">
            <div className="container">
                <h1 className="text-white pt-3 mb-4">Calculate your age</h1>
                <div className="date_card  pt-2 pb-5 card">
                    <div className="col-12 row mx-0 mt-5">
                        <div className="col-6 col-xs-12">
                            <label className="m-0 d-flex text-white" htmlFor="dob">
                                Select DOB
                            </label>
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                value={startDate}
                                max={moment().format("YYYY-MM-DD")}
                                className="form-control"
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="col-6 col-xs-12">
                            <label className="m-0 d-flex text-white" htmlFor="dob">
                                Select End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                id="end-date"
                                value={endDate}
                                className="form-control"
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="age_card d-flex justify-content-around my-5">
                    <div className="age_card_item card">
                        <h2>{state.years || "---"}</h2>
                        <p>Years</p>
                    </div>
                    <div className="age_card_item card">
                        <h2>{state.months % 12 || "---"}</h2>
                        <p>Months</p>
                    </div>
                    <div className="age_card_item card">
                        <h2>{parseInt((state.days % 365) / 12 + "") || "---"}</h2>
                        <p>Days</p>
                    </div>
                </div>

                <hr />
                <div className="age_detail_card card p-3">
                    <p>
                        Total Years: <b>{state.years || "---"}</b>{" "}
                    </p>
                    <p>
                        Total Months: <b>{state.months || "---"}</b>{" "}
                    </p>
                    <p>
                        Total Weeks: <b>{state.weeks || "---"}</b>
                    </p>
                    <p>
                        Total Days: <b>{state.days || "---"}</b>
                    </p>
                    <p>
                        Total Hours: <b>{state.hours || "---"}</b>
                    </p>
                    <p>
                        Total Minutes: <b>{state.minutes || "---"}</b>{" "}
                    </p>
                    <p>
                        Total Seconds: <b>{state.seconds || "---"}</b>{" "}
                    </p>
                </div>
            </div>
        </div>
        // <div id="age-calculator" className="App ">
        //   <h1 className="text-white mt-3 mb-4">Calculate your age</h1>
        //   <div className="date_card  pt-2 pb-5 card mx-2">
        //     <div className="col-12 row mx-0 mt-5">
        //       <div className="col-6 col-xs-12">
        //         <label className="m-0 d-flex text-white" htmlFor="dob">
        //           Select DOB
        //         </label>
        //         <input
        //           type="date"
        //           name="dob"
        //           id="dob"
        //           value={startDate}
        //           max={moment().format("YYYY-MM-DD")}
        //           className="form-control"
        //           onChange={(e) => setStartDate(e.target.value)}
        //         />
        //       </div>
        //       <div className="col-6 col-xs-12">
        //         <label className="m-0 d-flex text-white" htmlFor="dob">
        //           Select End Date
        //         </label>
        //         <input
        //           type="date"
        //           name="endDate"
        //           id="end-date"
        //           value={endDate}
        //           className="form-control"
        //           onChange={(e) => setEndDate(e.target.value)}
        //         />
        //       </div>
        //     </div>
        //   </div>

        //   <div className="age_card d-flex justify-content-around my-3">
        //     <div className="age_card_item card">
        //       <h2>{state.years || "---"}</h2>
        //       <p>Years</p>
        //     </div>
        //     <div className="age_card_item card">
        //       <h2>{state.months % 12 || "---"}</h2>
        //       <p>Months</p>
        //     </div>
        //     <div className="age_card_item card">
        //       <h2>{parseInt((state.days % 365) / 12 + "") || "---"}</h2>
        //       <p>Days</p>
        //     </div>
        //   </div>

        //   <hr />
        //   <div className="age_detail_card card p-3">
        //     <p>
        //       Total Years: <b>{state.years || "---"}</b>{" "}
        //     </p>
        //     <p>
        //       Total Months: <b>{state.months || "---"}</b>{" "}
        //     </p>
        //     <p>
        //       Total Weeks: <b>{state.weeks || "---"}</b>
        //     </p>
        //     <p>
        //       Total Days: <b>{state.days || "---"}</b>
        //     </p>
        //     <p>
        //       Total Hours: <b>{state.hours || "---"}</b>
        //     </p>
        //     <p>
        //       Total Minutes: <b>{state.minutes || "---"}</b>{" "}
        //     </p>
        //     <p>
        //       Total Seconds: <b>{state.seconds || "---"}</b>{" "}
        //     </p>
        //   </div>
        // </div>
    );
}
