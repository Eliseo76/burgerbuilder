import React, {Fragment, Component} from "react";
import classes from "./Layout.module.css";
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/Sidedrawer/SideDrawer';

class layout extends Component{
    state={
        showSideDrawer: false
    };
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer: false})
    };
    toggleMenuHandler = ()=>{
      this.setState({showSideDrawer:true})
    };

    render() {
        return (
            <Fragment>
                <ToolBar toggleDrawer={this.toggleMenuHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>

        );
    }


};

export default layout;