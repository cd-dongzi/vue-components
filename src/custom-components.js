import Dialog1 from 'components/Dialog/alert1/index.js'
import Dialog2 from 'components/Dialog/alert2/index.js'
import Dialog3 from 'components/Dialog/alert3/index.js'

import { showLoading as showLoading1, hideLoading as hideLoading1 } from 'components/Loading/loading1/index.js'
import { showLoading as showLoading2, hideLoading as hideLoading2 } from 'components/Loading/loading2/index.js'
const install = Vue => {

    Vue.prototype.$alert1 = Dialog1
    Vue.prototype.$alert2 = Dialog2
    Vue.prototype.$alert3 = Dialog3


    Vue.prototype.$showLoading1 = showLoading1
    Vue.prototype.$hideLoading1 = hideLoading1
    Vue.prototype.$showLoading2 = showLoading2
    Vue.prototype.$hideLoading2 = hideLoading2
}
export default install
