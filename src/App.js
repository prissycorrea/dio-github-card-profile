import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Image, 
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9'
const colorDarkFontGithub = '#4f565e'
const imageGitProfile ='https://avatars.githubusercontent.com/u/99624784?v=4'
const urlToMyGithub ='https://github.com/prissycorrea'

const App = () => {
    const handlePressGoToGithub = async () => {
        const resp = await Linking.canOpenURL(urlToMyGithub);
        if(resp) {
            await Linking.openURL(urlToMyGithub)
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
                <View style={style.content}>
                    <Image acessibilityLabel='Foto de perfil de Priscilla Correa' style={style.avatar} source={{uri: imageGitProfile}}/>
                    <Text acessibilityLabel='Nome: Priscilla Correa' style={[style.defaultText, style.titleName]}>
                        Priscilla Correa
                    </Text >
                    <Text acessibilityLabel='Nickname: prissy correa' style={[style.defaultText, style.nickName]}>
                        prissycorrea
                    </Text>
                    <Text acessibilityLabel='Descrição:Estudante de análise e desenvolvimento de sistemas com foco em front-end e mobile.' style={[style.defaultText, style.descriptionText]}>
                        Estudante de análise e desenvolvimento de sistemas com foco em front-end e mobile.
                    </Text>
                    <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                    </Pressable>
                </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //a view sempre comeca como column
        backgroundColor: colorGithub,
        flex: 1, // Expandir o container para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderColor: colorFontGithub,
        borderRadius: 100,
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub
    },
    titleName: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginTop: 20,
    },
    nickName: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 15,
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        marginTop: 25,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});