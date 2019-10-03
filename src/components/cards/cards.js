import React,{Component} from 'react';
import "./cards.css"
// import Example from '../navbar/navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTasks, faNewspaper, faUtensils, faGlassWhiskey} from "@fortawesome/free-solid-svg-icons";
library.add(faTasks, faNewspaper, faUtensils, faGlassWhiskey);
class Card extends Component{
    render(){
        return(
            <div>
                <div className="row gutters-20">
                    <div className="col-sm-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-green ">
                                        {/* <i classNameName="flaticon-classNameNamemates text-green"></i> */}
                                        <FontAwesomeIcon icon={faTasks} size="lg" className="text-green" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Attendance</div>
                                        {/* <div classNameName="item-number"><span className="counter" data-num="150000">150000</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-sm-6 col-12">
                    <button type="submit" onClick={() => this.props.history.push({ pathname: '/topicofweek', state: { usrid: this.props.location.state.usrid } })} >
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-blue">
                                        {/* <i className="flaticon-multiple-users-silhouette text-blue"></i> */}
                                        <FontAwesomeIcon icon={faNewspaper} size="lg" className="text-blue"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Weekly Journal</div>
                                        {/* <div className="item-number"><span className="counter" data-num="2250">2250</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </button>
                    </div>
                    <div className="col-sm-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-yellow">
                                        {/* <i className="flaticon-couple text-orange"></i> */}
                                        <FontAwesomeIcon icon={faUtensils} size="lg" className="text-orange"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Food Intake</div>
                                        {/* <div className="item-number"><span className="counter" data-num="5690">5690</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sml-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-red">
                                        {/* <i classNameName="flaticon-money text-red"></i> */}
                                        <FontAwesomeIcon icon={faGlassWhiskey} size="lg" className="text-red" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Water Intake</div>
                                        {/* <div classNameName="item-number"><span>$</span><span classNameName="counter" data-num="193000">193000</span></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
