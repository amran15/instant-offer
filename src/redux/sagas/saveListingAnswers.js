import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* saveListingContractAnswers(action) {
    try {
        yield axios.post('/api/listing/save', action.payload);
        yield put ({ type: LISTING_CATEGORY_1 })
        // yield put ({ type: '2' });
        // yield put ({ type: '3' });
        // yield put ({ type: '4' });
        // yield put ({ type: '5' });
        // yield put ({ type: '6' });
        // yield put ({ type: '7' });
        // yield put ({ type: '8' });
    } catch (error) {
        console.log('error posting/saving listing_contract answers', error);
    }
}

function* saveListingAnswers() {
    yield takeLatest('SAVE_LISTING_ANSWER', saveListingContractAnswers);

}

export default saveListingAnswers;