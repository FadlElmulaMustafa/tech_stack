//import liraries
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View,LayoutAnimation  } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


// create a component
class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();

    }
    renderDescription() {

        const { library, selectedLibraryId } = this.props;
        if (library.id === selectedLibraryId){
            return  (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 15 , paddingRight: 5}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }

    }
    render() {
        const { titleStyle } = styles;
        const { id , title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={ () => this.props.selectLibrary(id)} 
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}> 
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
           
        );
    }
}

// define your styles
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
const mapStateToProps = state => {
    return { selectedLibraryId: state.SelectedLibraryId }
}
//make this component available to the app
export default connect(mapStateToProps, actions)(ListItem);
