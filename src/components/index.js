import AmirButton from './amir-button'
import AmirLoading from './amir-loading'
import AmirToast from './amir-toast'
import AmirPagination from './amir-pagination'
import AmirConfirm from './amir-confirm'
import AmirTable from './amir-table'
import AmirInput from './amir-input'

let amir = {
	"a-button": AmirButton,
	"a-loading": AmirLoading,
	"a-toast": AmirToast,
	"a-pagination": AmirPagination,
	'a-confirm': AmirConfirm,
	'a-table': AmirTable,
	'a-input': AmirInput
};

function install(Vue) {
	Object.keys(amir).forEach((key)=>{
		Vue.component(key, amir[key]);
	});
}

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install);
}

export default install