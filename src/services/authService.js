

export const AuthService = {


    login(username, password) {

        console.log('hello');
        // Vue.http.get('https://newsapi.org/v1/sources?language=en')


        vue.http.post('/my-api', {}).then((response) => {
            //success
        }, (response) => {
            //error
        });

    }


};