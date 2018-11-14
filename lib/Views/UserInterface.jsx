import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import RelatedMaps from './RelatedMaps';
import CustomFeedback from './CustomFeedback';
import { Menu, Nav, ExperimentalMenu} from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import MeasureTool from 'terriajs/lib/ReactViews/Map/Navigation/MeasureTool';

import './global.scss';

export default function UserInterface(props) {
    return (
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <RelatedMaps viewState={props.viewState} />
                <MenuItem caption="About" href="about.html" key="about-link"/>
            </Menu>
            <Nav>
                <MeasureTool terria={props.viewState.terria} key="measure-tool"/>
                <If condition={props.terria.configParameters.feedbackUrl && !props.viewState.hideMapUi()}>
                    <aside>
                        <CustomFeedback viewState={props.viewState}/>
                    </aside>
                </If>
            </Nav>
        </StandardUserInterface>
    );
}
