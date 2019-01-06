//import liraries
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View  } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


// create a component
class ListItem extends Component {
    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        if (library.id === selectedLibraryId){
            console.log('=');
            return  (
                <Text>{library.description}</Text>
            );
        }
        console.log('!=');
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
