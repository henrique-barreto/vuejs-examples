<template>


    <div class="container">

        <div class="login">
            <h1>Login</h1>
            <hr/>

            <input @click="start" type="text" placeholder="username"><br>
            <input type="password" placeholder="password"><br>
        </div>
    </div>
</template>

<script>


    export default {

        methods: {
            start() {
                alert('fasdfsfsdfsd');
//                window.nanobar.go(30);

                timeout();
                var index = 1;
                var timems = 1;
                var stop = false;
                function timeout () {
                    setTimeout(function () {
                        window.nanobar.go(index);
                        if (index < 40)
                            index += 10;
                        else if (index >= 40 && index < 50)
                            index += 5;
                        else if (index >= 50 && index < 70)
                            index += 3;
                        else
                            index += 1;
                        timems = timems + 30;
                        if (index < 95 && !stop)
                            timeout();
                        else {
                            window.nanobar.go(100);
                            stop = true;
                        }
                    }, timems);
                };


            }
        },
        ready() {
            alert('fasdfsfsdfsd');

        }
    }

</script>


<style scoped>

    .login {
        width: 320px;
        margin: 0 auto;
    }

</style>