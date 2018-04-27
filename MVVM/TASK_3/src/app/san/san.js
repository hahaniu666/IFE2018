import san from 'san';
export default function _san() {
    //

    let a = 1;
    // alert(a)



    function component() {
        var element = document.createElement('div');

        // Lodash, currently included via a script, is required for this line to work
        element.innerHTML = "Hello webpack";
        return element;
    }

    document.body.appendChild(component());




    var MyApp1 = san.defineComponent({
        template: `
                <div>
                    <input type="text" value="{=name=}">
                    <p>Hello {{name}}!</p>
                </div>
        `,

        initData: function () {
            return {
                name: 'San'
            };
        }
    });


    var myApp1 = new MyApp1();
    myApp1.attach(document.getElementById("div1"));



    var MyApp2 = san.defineComponent({
        template: '<ul><li s-for="item in list">{{item}}</li></ul>',

        attached: function () {
            this.data.set('list', ['san', 'er', 'esui', 'etpl', 'esl']);
        }
    });

    var myApp2 = new MyApp2();
    myApp2.attach(document.getElementById("div2"));

}