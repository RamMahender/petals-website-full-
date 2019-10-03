import React, {Component} from 'react';
import './dashboard11.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as dashboard1Actions from "../../store/dashboard1/actions";
export class dashboard11 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
        <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav style = {{ backgroundColor: "#002557"}}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home" style =  {{backgroundColor: "#001635", height: "47px", LineHeight: "45px"}}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText className = "home-text active">
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices"  style =  {{backgroundColor: "#001635"}}>
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            {/* <main>
                <Route path="/" exact component={props => <RootComponent />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/devices" component={props => <Devices />} />
            </main> */}
        </React.Fragment>
    )}
    />
</Router>
      )
      
    }
  }
// export default connect(
//     ({ dashboard1 }) => ({ ...dashboard1 }),
//     dispatch => bindActionCreators({ ...dashboard1Actions }, dispatch)
//   )( dashboard1 );

export default dashboard11;
