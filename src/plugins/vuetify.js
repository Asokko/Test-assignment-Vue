import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: colors.grey.darken4,
                main:colors.grey.darken3,
                bar:colors.grey.darken2
            }
        }
    }
});
